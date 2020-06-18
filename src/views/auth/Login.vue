<template>
  <div
    id="page-login"
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
  >
    <div class="container">
      <div
        class="vx-col sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mx-auto self-center"
      >
        <vs-card>
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col sm:w-full md:w-full">
              <div class="px-8 py-8 bg-white">
                <div class="mb-4">
                  <h4 class="mb-4">
                    Login
                  </h4>
                  <p>Welcome back, please login to your account.</p>
                </div>

                <div class="pt-5">
                  <div>
                    <vs-input
                      data-vv-validate-on="blur"
                      name="email"
                      icon-no-border
                      icon="icon icon-user"
                      icon-pack="feather"
                      label-placeholder="Email"
                      class="w-full"
                    />
                    <vs-input
                      data-vv-validate-on="blur"
                      type="password"
                      name="password"
                      icon-no-border
                      icon="icon icon-lock"
                      icon-pack="feather"
                      label-placeholder="Password"
                      class="w-full mt-6"
                    />

                    <div class="flex flex-wrap justify-between my-5">
                      <vs-checkbox class="mb-3">
                        Remember Me
                      </vs-checkbox>
                      <router-link to="/reset-password">
                        Forgot Password?
                      </router-link>
                    </div>
                    <vs-button type="border" to="/signup">
                      Go to Register
                    </vs-button>
                    <vs-button class="float-right" @click="login" to="/admin">
                      Login
                    </vs-button>

                    <vs-divider>OR</vs-divider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </vs-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: false,
  }),
  methods: {
    login() {
      this.$vs.notify({
        title: 'Success',
        text: 'Login successfully!',
        iconPack: 'feather',
        icon: 'icon-check',
        color: 'primary'
      })
    },
  },
};
</script>
