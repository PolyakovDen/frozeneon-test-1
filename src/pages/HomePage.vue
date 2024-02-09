<script lang="ts" setup>
  import { computed, onMounted, ref } from 'vue';
  import { getPackages, PackageInfo } from '@/services/usePackages';
  import PackagesList from '@/components/PackagesList.vue';

  const search = ref('');
  const packages = ref<PackageInfo[]>([]);
  const currentPage = ref(1);
  const packagesPerPage = 10;
  const isLoading = ref(false);

  onMounted(async () => {
    isLoading.value = true;
    packages.value = await getPackages();
    isLoading.value = false;
  });

  function changePage(page: number) {
    currentPage.value = page;
  }

  const filteredPackages = computed<PackageInfo[]>(() => {
    return packages.value.filter((item: PackageInfo) => {
      if (!search.value.trim()) {
        return true;
      }

      return item.name
        .toLowerCase()
        .includes(search.value.trim().toLowerCase());
    });
  });

  const displayedPackages = computed(() => {
    const startIndex: number = (currentPage.value - 1) * packagesPerPage;
    const endIndex: number = startIndex + packagesPerPage;
    return filteredPackages.value.slice(startIndex, endIndex);
  });

  const totalPages = computed(() =>
    Math.ceil(filteredPackages.value.length / packagesPerPage)
  );
</script>

<template>
  <v-container class="h-100">
    <v-row>
      <v-col cols="12" class="text-center">
        <v-text-field
          v-model="search"
          label="Search package"
          variant="outlined"
          clearable
        />
        <div v-if="isLoading" class="d-flex justify-center align-center mt-16">
          <v-progress-circular indeterminate color="primary" :size="50" />
        </div>
        <div
          v-if="!displayedPackages.length && !isLoading"
          class="d-flex flex-column justify-center align-center mt-16"
        >
          Package not found
        </div>
        <PackagesList
          v-if="!isLoading && displayedPackages.length > 0"
          :packages="displayedPackages"
        />
        <v-pagination
          v-if="totalPages > 1 && !isLoading"
          v-model="currentPage"
          class="mt-7"
          :length="totalPages"
          color="primary"
          @update:model-value="changePage"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
