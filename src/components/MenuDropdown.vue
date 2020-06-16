<template>
  <div class="flex mr-8">
    <vs-button class="btnx" type="filled" @click="openBookingDrawer">Add</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" type="filled" icon="expand_more"></vs-button>
      <vs-dropdown-menu>
        <vs-dropdown-item @click="openBookingDrawer">
          <feather-icon icon="MapPinIcon" svg-classes="w-5 h-5" />
          <span class="p-2">Booking</span>
        </vs-dropdown-item>
        <vs-dropdown-item @click="openDiscountDrawer">
          <feather-icon icon="XOctagonIcon" svg-classes="w-5 h-5" />
          <span class="p-2">Discount</span>
        </vs-dropdown-item>
        <vs-dropdown-item class="flex items-center">
          <feather-icon icon="UserIcon" svg-classes="w-5 h-5" />
          <span class="p-2">Clients</span>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <feather-icon icon="UsersIcon" svg-classes="w-5 h-5" />
          <span class="p-2">Teams</span>
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
import { Route } from "vue-router";

export default {
  name: "MenuDropDown",
  components: {},
  data: () => ({
  }),
  methods: {
    openBookingDrawer() {
      this.$events.emitEvent('BookingDrawer', [true]);
    },
    openDiscountDrawer() {
      this.$events.emitEvent('DiscountDrawer', [true])
    }
  }
};
</script>
