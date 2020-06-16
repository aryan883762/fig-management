<template>
  <div id="app">
    <!-- <template v-if="$subdomain.error">
      <error-404 />
    </template> -->
    <!-- <template v-else> -->
      <router-view />
      <!-- <router-view v-if="$auth.ready() && $subdomain.ready" />
      <div class="main-loading" v-if="!($auth.ready() && $subdomain.ready)" v-loading="true"></div> -->
    <!-- </template> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    "error-404": require("@/views/error/404").default
  }
};
</script>

<style lang="scss">
@import "@/theme/app.scss";
</style>
