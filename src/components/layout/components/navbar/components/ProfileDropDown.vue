<template>
  <div
    class="the-navbar__user-meta flex items-center"
  >
    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">
        {{ user.name | truncate(15, '...') }}
      </p>
      <small>
        {{user.role}}
      </small>
    </div>

    <vs-dropdown
      vs-custom-content
      vs-trigger-click
      class="cursor-pointer"
    >
      <div class="con-img ml-3">
        <vs-avatar
          size="large"
          :src="user.img"
        />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/account/settings').catch(() => {})"
          >
            <feather-icon
              icon="UserIcon"
              svg-classes="w-4 h-4"
            />
            <span class="ml-2">Profile</span>
          </li>
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/account/events').catch(() => {})"
          >
            <feather-icon
              icon="CalendarIcon"
              svg-classes="w-4 h-4"
            />
            <span class="ml-2">My Events</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/email').catch(() => {})"
          >
            <feather-icon
              icon="MailIcon"
              svg-classes="w-4 h-4"
            />
            <span class="ml-2">Inbox</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/account/orders').catch(() => {})"
          >
            <feather-icon
              icon="CheckSquareIcon"
              svg-classes="w-4 h-4"
            />
            <span class="ml-2">Orders</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/chat').catch(() => {})"
          >
            <feather-icon
              icon="MessageSquareIcon"
              svg-classes="w-4 h-4"
            />
            <span class="ml-2">Chat</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/account/wish-list').catch(() => {})"
          >
            <feather-icon
              icon="HeartIcon"
              svg-classes="w-4 h-4"
            />
            <span class="ml-2">Wish List</span>
          </li>

          <vs-divider class="m-1" />
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout"
          >
            <feather-icon
              icon="LogOutIcon"
              svg-classes="w-4 h-4"
            />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
import { Route } from 'vue-router'

export default {
  name: 'ProfileDropDown',
  components: {},
  data:()=>({
     user: {
      name: 'Elicia Rieske',
      img: require('@/assets/images/portrait/small/avatar-s-2.jpg'),
      role: 'admin'
    }
  }),
  methods: {
    logout() {
      this.$vs.notify({
        title: 'Success',
        text: 'Logout successfully!',
        iconPack: 'feather',
        icon: 'icon-check',
        color: 'success'
      });
      this.$router.push('/').catch(() => {})
    }
  }
}

</script>
