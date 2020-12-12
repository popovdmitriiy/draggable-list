import { mapActions, mapMutations } from 'vuex';
import draggable from 'vuedraggable';

import dashboardCols from '@/configuration/dashboardCols';
import VDashboardCard from '@/components/VDashboardCard';

export default {
  name: 'VDashboardPage',

  components: {
    VDashboardCard,
    draggable,
  },

  data() {
    return {
      colsData: {},
    };
  },

  mounted() {
    this.colsData = JSON.parse(JSON.stringify(this.$store.getters.dashboardCols));
  },

  computed: {
    isEditingMode: {
      get() {
        return this.$store.getters.isEditingMode;
      },
      set(value) {
        this.setEditingMode(value);
      },
    },

    columns() {
      return Object.values(dashboardCols).map((col) => ({
        name: col,
      }));
    },
  },

  methods: {
    ...mapActions([
      'addCardItem',
      'deleteCardItem',
      'moveCardItem',
    ]),

    ...mapMutations([
      'setEditingMode',
    ]),

    handleChangeDrag(val, colName) {
      if (val.added) {
        this.addCardItem({
          colName,
          item: val.added.element,
          idx: val.added.newIndex,
        });
      } else if (val.removed) {
        this.deleteCardItem({
          colName,
          idx: val.removed.oldIndex,
        });
      } else if (val.moved) {
        this.moveCardItem({
          colName,
          oldIdx: val.moved.oldIndex,
          newIdx: val.moved.newIndex,
        });
      }
    },
  },
};
