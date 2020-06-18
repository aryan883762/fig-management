<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter justify-center items-center"
  >
    <div class="container">
      <div class="vx-col lg:w-1/2 xl:w-1/2 mx-auto self-center">
        <vs-card>
          <div class="vx-row">
            <div
              class="vx-col sm:w-full lg:pt-24 lg:pb-24 md:w-full  mx-auto self-center bg-white"
            >
              <div class="p-8">
                <div class="mb-8">
                  <h4 class="mb-4">
                    Recover your password
                  </h4>
                  <p>
                    Please enter your email address and we'll send you
                    instructions on how to reset your password.
                  </p>
                </div>
                <vs-input
                  v-model="email"
                  v-validate="'required|email'"
                  label-placeholder="Email"
                  type="email"
                  data-vv-validate-on="blur"
                  name="email"
                  icon-no-border
                  icon="icon icon-user"
                  icon-pack="feather"
                  class="w-full mb-8"
                  size="normal"
                />
                <vs-button type="border" to="/" class="px-4 w-full md:w-auto">
                  Back To Login
                </vs-button>
                <vs-button
                  :disabled="!validateForm"
                  class="float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0"
                  @click="sendMailPassword(email)"
                >
                  Recover Password
                </vs-button>
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
  name: "ForgotPassword",
  components: {},
  data: () => ({
    email: "",
    response: null,
  }),
  methods: {
    async sendMailPassword() {
      const response = { code: 200, message: 'Sent successfully.' };
      this.email = "";
      this.$vs.notify({
        title: "Send Forgot Password",
        text: response.message,
        color: response.code === 200 ? "success" : "danger",
        iconPack: 'feather',
        icon: response.code === 200 ? "icon-check" : "icon-alert-triangle",
        color: response.code === 200 ? "success" : "danger"
      });
    },
    validateForm() {
      return !this.errors.any() && this.email !== "";
    },
  },
};
</script>
