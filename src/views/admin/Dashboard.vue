<template>
  <div>
    <div class="flex w-full bg-white shadow p-4 mb-8 rounded">
      <div class="vx-row lg:flex-row w-full items-center m-0">
        <div class="vx-col w-full xl:w-2/5 lg:w-2/5 p-0">
          <div class="flex">
            <!-- <div class="classic-caledar">
              <v-range-selector
                :end-date.sync="range.end"
                :start-date.sync="range.start"
                :hide-calendar="hideCalendar"
              />
            </div> -->
          </div>
        </div>
        <div class="vx-col w-full xl:w-3/5 lg:w-3/5 p-0">
          <div class="vx-row">
            <div class="vx-col flex items-center w-full xl:w-1/6 lg:w-1/6 mb-2 xl:mb-0 lg:mb-0">
              <h6>Filter by:</h6>
            </div>
            <div class="vx-col w-full xl:w-1/3 lg:w-1/3 mb-2 xl:mb-0 lg:mb-0">
              <v-select
                :options="locationList"
                :clearable="true"
              />
            </div>
            <div class="vx-col w-full xl:w-1/4 lg:w-1/4 mb-2 xl:mb-0 lg:mb-0">
              <v-select
                :options="teamList"
                :clearable="true"
              />
            </div>
            <div class="vx-col w-full xl:w-1/4 lg:w-1/4 mb-2 xl:mb-0 lg:mb-0">
               <v-select
                :options="statusList"
                :clearable="true"
              />
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid row-gap-2 grid-cols-7 font-medium text-black">
      <div class="p-4">Date</div>
      <div class="p-4">Time</div>
      <div class="p-4">Client Name</div>
      <div class="p-4">Service Location</div>
      <div class="p-4">Service Type</div>
      <div class="p-4">Assigned</div>
      <div class="p-4">Status</div>
    </div>
    <div
      class="grid row-gap-2 grid-cols-7 bg-white mt-5 font-medium shadow rounded"
      v-for="item in bookingList"
      :key="item.id"
    >
      <div class="p-5 text-black">
        <p class="ml-4">{{ item.date }}</p>
        <vs-chip>
          WEEKLY
        </vs-chip>
      </div>
      <div class="p-5 text-black">{{ item.time }}</div>
      <div class="p-5 font-light">{{ item.name }}</div>
      <div class="p-5">
        <p class="text-black">{{ item.address }}</p>
        <p class="text-secondary">Location: {{ item.location }}</p>
      </div>
      <div class="p-5">
        <p class="font-light">
          {{ item.serviceType["name"] | truncate(30, "...") }}
        </p>
        <p class="italic font-light">
          Extra:
          {{
            item.serviceType["extras"].join().toString() | truncate(15, "...")
          }}
        </p>
      </div>
      <div class="p-5 text-black">{{ item.assignedTo }}</div>
      <div class="p-5">
        <!-- <vs-button
          :color="
            item.status === 'Pending'
              ? 'dark'
              : item.status === 'Completed'
              ? 'success'
              : 'warning'
          "
          type="border"
          size="small"
          >{{ item.status }}</vs-button> -->

        <vs-chip     :color="
            item.status === 'Pending'
              ? 'dark'
              : item.status === 'Completed'
              ? 'success'
              : 'warning'
          ">
          {{ item.status }}
        </vs-chip>
      </div>
    </div>
    <BookingForm/>
    <DiscountForm/>
    <router-view />
  </div>
</template>
<script>
import VRangeSelector from "../../components/vuelendar/components/vl-range-selector";
import vSelect from 'vue-select'
import BookingForm from '../shared/components/BookingForm'
import DiscountForm from '../shared/components/DiscountForm'
export default {
  components: {
    VRangeSelector,
    vSelect,
    BookingForm,
    DiscountForm
  },
  data: () => ({
    bookingList: [
      {
        id: 1,
        date: "12/24",
        time: "2:00 pm-6:00 pm",
        name: "Sally Johnson",
        address: "5649 Hillside Dr, Felton, CA 95018",
        location: "New York",
        serviceType: {
          name: "One bedroom delux studio clean with Pet",
          extras: ["toilets, windows"],
        },
        assignedTo: "Mary V.",
        status: "In Progress",
      },
      {
        id: 2,
        date: "12/24",
        time: "2:00 pm-6:00 pm",
        name: "Sally Johnson",
        address: "5649 Hillside Dr, Felton, CA 95018",
        location: "New York",
        serviceType: {
          name: "One bedroom delux studio clean with Pet",
          extras: ["toilets, windows"],
        },
        assignedTo: "Mary V.",
        status: "In Progress",
      },
      {
        id: 3,
        date: "12/24",
        time: "2:00 pm-6:00 pm",
        name: "Sally Johnson",
        address: "5649 Hillside Dr, Felton, CA 95018",
        location: "New York",
        serviceType: {
          name: "One bedroom delux studio clean with Pet",
          extras: ["toilets, windows"],
        },
        assignedTo: "Mary V.",
        status: "Pending",
      },
      {
        id: 4,
        date: "12/24",
        time: "2:00 pm-6:00 pm",
        name: "Sally Johnson",
        address: "5649 Hillside Dr, Felton, CA 95018",
        location: "New York",
        serviceType: {
          name: "One bedroom delux studio clean with Pet",
          extras: ["toilets, windows"],
        },
        assignedTo: "Mary V.",
        status: "Completed",
      },
      {
        id: 5,
        date: "12/24",
        time: "2:00 pm-6:00 pm",
        name: "Sally Johnson",
        address: "5649 Hillside Dr, Felton, CA 95018",
        location: "New York",
        serviceType: {
          name: "One bedroom delux studio clean with Pet",
          extras: ["toilets, windows"],
        },
        assignedTo: "Mary V.",
        status: "Completed",
      },
    ],
    statusList: [
      { label: "In Progress", value: 1 },
      { label: "Pending", value: 2 },
      { label: "Success", value: 3 },
    ],
    teamList: [
      { label: "John", value: 1 },
      { label: "Marry", value: 2 },
      { label: "Dara", value: 3 },
      { label: "Elvis", value: 4 },
      { label: "Louis", value: 5 },
    ],
    locationList: [
      { label: "New York New York New York", value: 1 },
      { label: "Africa", value: 2 },
      { label: "England", value: 3 },
    ],
    range: {},
    hideCalendar: true,
    active: true
  }),
  watch: {
    range: {
      deep: true,
      handler(val) {
        console.log(val);
        //for handling
        this.$emit("dashboard:date:changed", val);
      },
    },
    viewMode(val) {
      switch (val) {
        case "today":
          this.range = {
            start: this.$moment()
              .startOf("day")
              .format("YYYY-MM-DD"),
            end: this.$moment()
              .startOf("day")
              .format("YYYY-MM-DD"),
          };
          break;

        case "week":
          this.range = {
            start: this.$moment().format("YYYY-MM-DD"),
            end: this.$moment()
              .add(1, "week")
              .format("YYYY-MM-DD"),
          };
          break;

        case "month":
          this.range = {
            start: this.$moment()
              .startOf("month")
              .format("YYYY-MM-DD"),
            end: this.$moment()
              .endOf("month")
              .format("YYYY-MM-DD"),
          };
          break;
      }
    },
  },
  methods: {
    showCalendar() {
      this.hideCalendar = !this.hideCalendar;
    },
  },
  created(){
  
  }
};
</script>
<style lang="scss">
    @import "../../components/vuelendar/scss/vuelendar.scss";
    //  .classic-caledar {
    //         position: absolute;
    //         z-index: 9;
    //         .vl-calendar {
    //           .vl-calendar-month{
    //               .vl-calendar-month__title{
    //                 margin-bottom: 5px!important;
    //               }
    //               .vl-flex{
    //                 border: 1px solid #e8eced;
    //                 &.classic-days{
    //                     padding: 10px 0px 0px 5px;
    //                 }
    //               }
    //           }
    //         }
    //      }  
</style>
