<template>
  <div
    id="page-signup"
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
                    Create Account
                  </h4>
                  <p>Fill the below form to create a new account.</p>
                </div>

                <div class="clearfix pb-5">
                  <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                      <vs-input
                        v-model="firstName"
                        v-validate="'required|alpha_dash|min:3|max:100'"
                        data-vv-validate-on="blur"
                        label-placeholder="First Name"
                        name="first name"
                        placeholder="First Name"
                        class="w-full"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("first name")
                      }}</span>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <vs-input
                        v-model="lastName"
                        v-validate="'required|alpha_dash|min:3|max:100'"
                        data-vv-validate-on="blur"
                        label-placeholder="Last Name"
                        name="last name"
                        placeholder="Last Name"
                        class="w-full"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("last name")
                      }}</span>
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full px-3">
                      <vs-input
                        v-model="email"
                        v-validate="'required|email'"
                        data-vv-validate-on="blur"
                        name="email"
                        type="email"
                        label-placeholder="Email"
                        placeholder="Email"
                        class="w-full"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("email")
                      }}</span>
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                      <vs-input
                        ref="password"
                        v-model="password"
                        v-validate="'required|min:8|max:100'"
                        type="password"
                        data-vv-validate-on="blur"
                        name="password"
                        label-placeholder="Password"
                        placeholder="Password"
                        class="w-full"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("password")
                      }}</span>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <vs-input
                        v-model="confirmPassword"
                        v-validate="'min:8|max:100|confirmed:password'"
                        type="password"
                        data-vv-validate-on="blur"
                        data-vv-as="password"
                        name="confirmPassword"
                        label-placeholder="Confirm Password"
                        placeholder="Confirm Password"
                        class="w-full"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("confirmPassword")
                      }}</span>
                    </div>
                  </div>

                  <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6">
                    I accept the terms & conditions.
                  </vs-checkbox>
                  <vs-button type="border" to="/" class="mt-6">
                    Back To Login
                  </vs-button>

                  <vs-button
                    class="float-right mt-6"
                    :disabled="!validateForm"
                    @click="registerUser"
                  >
                    Register
                  </vs-button>
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
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isTermsConditionAccepted: false,
  }),
  methods: {
    validateForm() {
      return (
        !this.errors.any() &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.email !== "" &&
        this.password !== "" &&
        this.confirmPassword !== "" &&
        this.isTermsConditionAccepted !== false
      );
    },
    resetFields() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    },
    registerUser() {
      this.$vs.loading();
    },
  },
};
</script>
