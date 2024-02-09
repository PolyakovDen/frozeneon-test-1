<script setup lang="ts">
  import { PackageInfo } from '@/services/usePackages';
  import { toRefs, defineProps, defineEmits } from 'vue';

  const emit = defineEmits(['close']);

  const props = defineProps<{
    packageItem: PackageInfo;
    isOpen: boolean;
  }>();

  const { packageItem, isOpen } = toRefs(props);
</script>

<template>
  <v-dialog v-model="isOpen" width="600" :close-on-back="false">
    <v-card>
      <v-card-title>
        Package name -
        <span class="font-weight-bold">{{ packageItem.name }}</span>
      </v-card-title>
      <v-card-text>
        <p class="mb-4">
          Package Type -
          <span class="font-weight-bold">{{ packageItem.type }}</span>
        </p>
        <p class="mb-4">
          Package Hits -
          <span class="font-weight-bold">{{ packageItem.hits }}</span>
        </p>
        <p class="mb-4">
          Package Bandwidth -
          <span class="font-weight-bold">{{ packageItem.bandwidth }}</span>
        </p>
        <div class="mb-4">
          <p>Links:</p>
          <p>
            <a :href="packageItem.links.self">Self</a>
          </p>
          <p>
            <a :href="packageItem.links.versions">Versions</a>
          </p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="emit('close')"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
