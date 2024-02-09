<script setup lang="ts">
  import { defineProps, ref, toRefs } from 'vue';
  import { PackageInfo } from '@/services/usePackages';
  import PackageModal from './PackageModal.vue';

  const props = defineProps<{
    packages: PackageInfo[];
  }>();

  const { packages } = toRefs(props);

  const isModalOpen = ref(false);
  const packageItem = ref<PackageInfo>();

  const openPackageModal = (item: PackageInfo) => {
    packageItem.value = item;
    isModalOpen.value = true;
  };

  const closePackageModal = () => {
    isModalOpen.value = false;
  };
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left font-weight-bold">Name</th>
        <th class="text-center font-weight-bold">Hits</th>
        <th class="text-right font-weight-bold">Bandwidth</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in packages"
        :key="item.name"
        class="cursor-pointer"
        @click="openPackageModal(item)"
      >
        <td class="text-left font-italic">{{ item.name }}</td>
        <td class="text-center font-weight-thin">{{ item.hits }}</td>
        <td class="text-right font-weight-thin">{{ item.bandwidth }}</td>
      </tr>
    </tbody>
  </v-table>

  <PackageModal
    v-if="packageItem"
    :is-open="isModalOpen"
    :package-item="packageItem"
    @close="closePackageModal"
  />
</template>
