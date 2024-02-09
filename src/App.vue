<template>
  <v-app>
    <v-main class="main">
      <router-view />
    </v-main>

    <v-footer class="footer d-flex flex-column pa-0 mt-auto">
      <div class="footer__me d-flex w-100 justify-center align-center px-4">
        <strong class="ml-2 mr-10">Polyakov Denis</strong>
        <v-btn
          class="mt-1"
          variant="text"
          size="small"
          color="blue-accent-2"
          href="https://github.com/PolyakovDen/frozeneon-test-1"
          target="_blank"
        >
          GitHub Repo
        </v-btn>
      </div>

      <v-divider :thickness="3" color="info" class="w-100" />

      <div class="px-4 py-2 text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Frozeneon</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped lang="scss">
  * {
    font-family: Roboto, sans-serif;
  }

  .main {
    height: calc(100% - 120px);
  }

  .footer {
    background-color: #1b2431;
    color: #fff;

    &__me {
      height: 80px;
    }

    &__rights {
      opacity: 0.5;
    }
  }
</style>
