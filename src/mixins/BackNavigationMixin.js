export default {
  data() {
    return {
      back: true
    };
  },
  methods: {
    goBack() {
      if (this.back) {
        this.$router.back();
      } else {
        // taking the to the correct dashboard
        this.$router.replace({ name: 'landing_page' });
      }
    },
  },

  beforeRouteEnter(to, from, next) {
    // finding out if it was the first url to handle back
    next(vm => {
      vm.back = !(from.fullPath === '/' && from.matched.length == 0 && from.name == null);
    });
  }
};
