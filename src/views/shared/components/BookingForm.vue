<template>
  <div class="">
    <vs-sidebar
      position-right
      parent="#app"
      default-index="1"
      color="primary"
      class="drawer-form"
      spacer
      v-model="active"
    >
      <div class="header-sidebar flex px-6 pt-0" slot="header">
        <div class="flex-col w-full mt-5">
          <div class="flex">
            <div class="flex-1">
              <p
                class="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-medium leading-9"
              >
                Book
              </p>
            </div>
            <div class="flex items-center items-end justify-end">
              <p class="mr-8">Address--Service--Date</p>
              <feather-icon
                icon="XIcon"
                svg-classes="w-6 h-6"
                class="cursor-pointer"
                @click="$closeDrawer()"
              />
            </div>
          </div>
        </div>
      </div>
      <vue-scroll>
        <div class="w-full pb-5 bg-grey-custom">
          <div class="px-10 pt-0 bg-white">
            <div class="flex-1 mt-5">
              <div class="vx-row">
                <div class="vx-col w-full mb-5">
                  <v-select
                    :options="bookingTypes"
                    v-model="bookingType"
                    class="cursor-pointer"
                  />
                </div>
              </div>
              <vs-divider position="left">
                WHO IS SERVICE FOR
              </vs-divider>
              <div class="vx-row">
                <div class="vx-col w-full mb-5">
                  <vs-input
                    label="Email"
                    placeholder="Your Email"
                    name="email"
                    class="w-full"
                  />
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col sm:w-1/2 w-full mb-5">
                  <vs-input
                    label="First Name"
                    placeholder="Name"
                    class="w-full"
                  />
                </div>
                <div class="vx-col sm:w-1/2 w-full mb-5">
                  <vs-input
                    label=" Last Name"
                    placeholder="Last Name"
                    class="w-full"
                  />
                </div>
              </div>
              <vs-divider position="left">
                WHERE IS SERVICE
              </vs-divider>
              <div class="vx-row">
                <div class="vx-col sm:w-3/5 w-full mb-5">
                  <vs-input
                    label="Address"
                    placeholder="Address"
                    class="w-full"
                  />
                </div>
                <div class="vx-col sm:w-2/5 w-full mb-5">
                  <vs-input label="Address2" class="w-full" />
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col sm:w-1/2 w-full mb-5">
                  <vs-input label="City" placeholder="City" class="w-full" />
                </div>
                <div class="vx-col sm:w-1/2 w-full mb-5">
                  <vs-input label="State" class="w-full" />
                </div>
              </div>
              <vs-divider position="left">
                WHICH SERVICE
              </vs-divider>
              <div class="vx-row">
                <div class="vx-col w-full mb-10">
                  <vs-input label="Service Type" class="w-full" />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 px-10">
            <div class="vx-row">
              <div class="vx-col w-full">
                <b>Summary:</b>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col sm:w-3/5 w-full">
                <div class="vx-row">
                  <div class="vx-col sm:w-1/2 w-full pr-0">
                    <p class="text-sm">Service - $998</p>
                    <p class="text-sm">Extras - $94</p>
                    <p class="text-sm">Adjustments - $99</p>
                  </div>
                  <div class="vx-col sm:w-1/2 w-full">
                    <p class="text-sm">Discount - $998</p>
                    <p class="text-sm">Tip - $94</p>
                    <p class="text-base font-extrabold">Total - $124</p>
                  </div>
                </div>
              </div>
              <div class="vx-col sm:w-2/5 w-full">
                <vs-button
                  type="filled"
                  @click="isRequestSubmitted = !isRequestSubmitted"
                  class="w-full"
                  color="success"
                >
                  Book now
                </vs-button>
              </div>
            </div>       
          </div>
        </div>
      </vue-scroll>
    </vs-sidebar>
  </div>
</template>

<script>
import { Route } from "vue-router";
import vSelect from "vue-select";
export default {
  name: "BookingForm",
  components: {
    vSelect,
  },
  data: () => ({
    active: false,
    eventType: "Business",
    eventDate: null,
    isDateFlexible: "yes",
    isSendRequest: true,
    bookingType: { label: "Appointment", value: 1 },
    bookingTypes: [
      { label: "Appointment", value: 1 },
      { label: "Event", value: 2 },
    ],
  }),
  created() {
    const self = this;
    this.$events.on("BookingDrawer", (isOpened) => {
      self.active = isOpened;
    });
  },
  watch: {
    active: function(isOpened) {
      this.$setAppPosition(isOpened);
    },
  },
};
</script>
