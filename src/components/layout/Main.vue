<template>
  <div class="layout--main flex flex-row">
    <SideBar />
    <div id="content-area">
      <div class="content-wrapper">
        <TheNavbarHorizontal />
        <div class="router-view">
          <div class="router-content">
            <div class="content-area__content">
              <BackToTop bottom="5%" right="50px" visibleoffset="100">
                <vs-button
                  icon-pack="feather"
                  icon="icon-arrow-up"
                  class="shadow-lg btn-back-to-top"
                  color="primary"
                />
              </BackToTop>
              <transition :name="'fade-out'" mode="out-in">
                <router-view />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BackToTop from "vue-backtotop";
import TheNavbarHorizontal from "./components/navbar/TheNavbarHorizontal.vue";
import SideBar from "../SideBar.vue";
export default {
  name: "layout-main",
  components: {
    TheNavbarHorizontal,
    SideBar,
    BackToTop,
  },
  data: () => ({}),
};
</script>
<style lang="scss"></style>
