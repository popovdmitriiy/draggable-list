import { mapActions } from 'vuex';

export default {
  name: 'VDashboardCardCreatePage',

  data() {
    return {
      title: null,
      description: null,
    };
  },

  computed: {
    isValid() {
      return this.title && this.description;
    },
  },

  methods: {
    ...mapActions([
      'createCardItem',
    ]),

    goToDashboard() {
      this.$router.push({
        name: 'VDashboardPage',
      });
    },

    save() {
      this.createCardItem({
        item: {
          title: this.title,
          description: this.description,
        },
      });

      this.goToDashboard();
    },

    cancel() {
      this.goToDashboard();
    },
  },
};
