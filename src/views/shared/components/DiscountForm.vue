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
                Create Discount Code
              </p>
            </div>
            <div class="flex items-center items-end justify-end">
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
        <div class="w-full pb-12">
          <div class="px-10 pt-0">
            <div class="flex-1 mt-5">
              <div class="vx-row">
                <div class="vx-col w-full mb-2">
                  <vs-input label="Discount code name" class="w-full" />
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col sm:w-1/2 w-full mb-5">
                  <vs-input
                    label="Account off"
                    placeholder="Name"
                    class="w-full"
                  />
                </div>
                <div class="vx-col sm:w-1/2 w-full mb-5">
                  <label class="vs-input--label">Amount type</label>
                  <v-select class="cursor-pointer" />
                </div>
              </div>
              <vs-divider position="left">
                VALID FOR
              </vs-divider>
              <div class="vx-row">
                <div class="vx-col w-full mb-2">
                  <label class="vs-input--label">Services or Extras</label>
                  <v-select class="cursor-pointer" />
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-full mb-2">
                  <label class="vs-input--label">Locations</label>
                  <v-select class="cursor-pointer" />
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-full mb-2">
                  <label class="vs-input--label">Teams</label>
                  <v-select class="cursor-pointer" />
                </div>
              </div>

              <div class="vx-row">
                <div class="vx-col sm:w-1/2 w-full mb-5">
                  <label class="vs-input--label block">Start Date</label>
                  <flat-pickr
                    v-model="startDate"
                    placeholder="Select date"
                    name="startDate"
                  />
                </div>
                <div class="vx-col sm:w-1/2 w-full mb-5">
                  <label class="vs-input--label block">End Date</label>
                  <flat-pickr
                    v-model="endDate"
                    placeholder="Select date"
                    name="endDate"
                  />
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-full mb-5 px-5">
                  <div
                    class="grid row-gap-2 grid-cols-7 font-medium text-black"
                  >
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>
                  <div
                    class="grid row-gap-2 grid-cols-7 font-medium text-black"
                  >
                    <div><vs-checkbox class="inline-flex"></vs-checkbox></div>
                    <div><vs-checkbox class="inline-flex"></vs-checkbox></div>
                    <div><vs-checkbox class="inline-flex"></vs-checkbox></div>
                    <div><vs-checkbox class="inline-flex"></vs-checkbox></div>
                    <div><vs-checkbox class="inline-flex"></vs-checkbox></div>
                    <div><vs-checkbox class="inline-flex"></vs-checkbox></div>
                    <div><vs-checkbox class="inline-flex"></vs-checkbox></div>
                  </div>
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-full mb-5">
                  <ul class="centerx mb-5 mt-3">
                    <li class="mb-4">
                      <vs-radio v-model="customerType" vs-value="1"
                        >New customers only</vs-radio
                      >
                    </li>
                    <li class="mb-4">
                      <vs-radio v-model="customerType" vs-value="2"
                        >Recurring customers only</vs-radio
                      >
                    </li>
                    <li class="mb-4">
                      <vs-radio v-model="customerType" vs-value="3"
                        >Non-Recurring customers only</vs-radio
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <vs-divider position="left">
                RESTRICTIONS
              </vs-divider>
              <div class="vx-row">
                <div class="vx-col w-full mb-2">
                  <vs-checkbox class="inline-flex"
                    >Discount team pay</vs-checkbox
                  >
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-full flex mb-2">
                  <vs-checkbox class="inline-flex">
                    Limit
                  </vs-checkbox>
                  <vs-input placeholder="1 use" class="w-24" size="small" />
                  <label class="ml-2">per customer</label>
                </div>
              </div>
              <vs-divider />
              <div class="vx-row">
                <div class="vx-col sm:w-3/6 w-full mb-5">
                  <vs-checkbox class="inline-flex"
                    >Can be combined with other offers</vs-checkbox
                  >
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col flex sm:w-3/6 w-full mb-5">
                  <vs-checkbox class="inline-flex">Limit to</vs-checkbox>
                  <vs-input placeholder="1 use" class="w-24" size="small" />
                  <label class="ml-2">total</label>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-center mt-5">
              <vs-button
                type="filled"
                @click="isRequestSubmitted = !isRequestSubmitted"
              >
                Create code
              </vs-button>
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
  name: "DiscountForm",
  components: {
    vSelect,
  },
  data: () => ({
    active: false,
    customerType: 1,
    eventDate: null,
    isDateFlexible: "yes",
    isSendRequest: true,
    bookingType: { label: "Appointment", value: 1 },
    bookingTypes: [
      { label: "Appointment", value: 1 },
      { label: "Event", value: 2 },
    ],
    startDate: null,
    endDate: null,
  }),
  created() {
    const self = this;
    this.$events.on("DiscountDrawer", (isOpened) => {
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
