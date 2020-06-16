<template>
    <div class="">
      <vs-sidebar
        :reduce="reduce"
        :reduce-not-hover-expand="notExpand"
        default-index="1"
        color="primary"
        class="sidebarx main-side-bar"
        spacer
        v-model="active"
      >
        <div class="header-sidebar full-content" slot="header">
          <h1 class="text-6xl">Fig.</h1>
          <p class="mt-6">Jobs Todat: 5</p>
          <p>Revenue: $1567.23</p>
        </div>
        <div
          class="header-sidebar reduce-content"
          slot="header"
          style="display: none"
        >
          <h1 class="text-xl">Fig.</h1>
        </div>
        <vs-sidebar-group open>
          <vs-sidebar-item index="1" @click="reduce = !reduce">
            <feather-icon icon="AlignJustifyIcon" svg-classes="w-5 h-5" /><span
              class="py-2 px-5"
              >Toggle Sidebar</span
            >
          </vs-sidebar-item>
          <vs-sidebar-item index="2">
            <feather-icon icon="HomeIcon" svg-classes="w-5 h-5" /><span
              class="py-2 px-5"
            >
              Home</span
            >
          </vs-sidebar-item>
          <vs-sidebar-item index="3">
            <feather-icon icon="CalendarIcon" svg-classes="w-5 h-5" />
            <span class="py-2 px-5">Calendar</span>
          </vs-sidebar-item>
          <vs-sidebar-item index="4">
            <feather-icon icon="UsersIcon" svg-classes="w-5 h-5" />
            <span class="py-2 px-5">Clients</span>
          </vs-sidebar-item>
          <vs-sidebar-item index="5">
            <feather-icon icon="CreditCardIcon" svg-classes="w-5 h-5" />
            <span class="py-2 px-5">Payments</span>
          </vs-sidebar-item>
          <vs-sidebar-item index="6">
            <feather-icon icon="PieChartIcon" svg-classes="w-5 h-5" />
            <span class="py-2 px-5"> Reports</span>
          </vs-sidebar-item>
          <vs-sidebar-item index="7">
            <feather-icon icon="SettingsIcon" svg-classes="w-5 h-5" />
            <span class="py-2 px-5"> Settings</span>
          </vs-sidebar-item>
          <vs-sidebar-item index="8">
            <feather-icon icon="HelpCircleIcon" svg-classes="w-5 h-5" />
            <span class="py-2 px-5"> Help </span>
          </vs-sidebar-item>
        </vs-sidebar-group>
      </vs-sidebar>
    </div>
</template>

<script>
import { Route } from "vue-router";

export default {
  name: "SideBar",
  components: {},
  data: () => ({
     active: true,
    notExpand: true,
    reduce: false,
  }),
    created() {
   if (this.windowWidth <= 992) {
        this.reduce = true;
      } else {
        this.reduce = false;
      }
  },
  watch: {
    windowWidth: function(winWidth) {
      if (winWidth <= 992) {
        this.reduce = true;
      } else {
        this.reduce = false;
      }
    },
  },
};
</script>
