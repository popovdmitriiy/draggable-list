import cols from '@/configuration/dashboardCols';

export default {
  initColumns(state) {
    Object.values(cols).forEach((colName) => {
      state.cols[colName] = [];
    });
  },

  setColumnData(state, { colName, data }) {
    if (!state.cols[colName]) {
      throw Error(`No such column ${colName}`);
    }

    state.cols[colName] = data;
    localStorage.setItem(state.dashboardStorageKey, JSON.stringify(state.cols));
  },

  setColumns(state, data) {
    state.cols = data;
  },

  setEditingMode(state, payload) {
    state.isEditingMode = payload;
  },
};
