<template>
  <div class="relative p-8">
    <div class="vx-navbar-wrapper navbar-full p-0">
      <vs-navbar class="navbar-custom navbar-skelton">
        <template>
          <div class="flex w-full">
            <div class="vx-row flex-col-reverse lg:flex-row w-full items-center m-0">
              <div
                class="vx-col w-full xl:w-2/5 lg:w-2/5 p-0"
              >
                <div class="flex">
                    <h3>May 20th, 2020</h3>
                    <vs-input
                      icon-after="true"
                      class="ml-0 xl:ml-6 lg:ml-6 w-full xl:w-4/5 lg:w-4/5"
                      color="none"
                      icon="search"
                      placeholder="Search for..."
                      v-model="searchQuestion"
                    />
                </div>
              </div>
              <div class="vx-col w-full xl:w-3/5 lg:w-3/5 p-0">
                <div class="flex items-center items-end justify-end">
                  <MenuDropdown/>
                  <NotificationDropDown />
                  <ProfileDropDown />
                </div>
              </div>
            </div>
          </div>
        </template>
      </vs-navbar>
    </div>
  </div>
</template>

<script>
import NotificationDropDown from "./components/NotificationDropDown.vue";
import ProfileDropDown from "./components/ProfileDropDown.vue";
import MenuDropdown from "../../../MenuDropdown.vue"
export default {
  name: "TheNavbarHorizontal",
  components: {
    NotificationDropDown,
    ProfileDropDown,
    MenuDropdown
  },
  data: () => ({
    searchQuestion: "",
  }),
};
</script>
<style lang="scss" scoped></style>
