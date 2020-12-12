import cols from '@/configuration/dashboardCols';

export default {
  dashboardInit({ commit, state }) {
    commit('initColumns');

    const previousData = localStorage.getItem(state.dashboardStorageKey);
    if (previousData) {
      const data = JSON.parse(previousData);
      commit('setColumns', data);
      return;
    }

    const defaultCards = [
      {
        title: 'Lorem 1',
        description: 'Sample description 1',
      },
      {
        title: 'Lorem 2',
        description: 'Sample description 2',
      },
    ];

    commit('setColumnData', {
      colName: cols.FIRST,
      data: defaultCards,
    });
  },

  createCardItem({ commit, state }, { item }) {
    const colName = cols.FIRST;
    const selectedCol = state.cols[colName];
    const data = [
      ...selectedCol,
      item,
    ];

    commit('setColumnData', {
      colName,
      data,
    });
  },

  addCardItem({ commit, state }, { colName, idx, item }) {
    const selectedCol = state.cols[colName];

    const data = [
      ...selectedCol.splice(0, idx),
      item,
      ...selectedCol.splice(idx),
    ];

    commit('setColumnData', {
      colName,
      data,
    });
  },

  deleteCardItem({ commit, state }, { colName, idx }) {
    const selectedCol = state.cols[colName];
    selectedCol.splice(idx, 1);

    commit('setColumnData', {
      colName,
      data: selectedCol,
    });
  },

  moveCardItem({ commit, state }, { colName, oldIdx, newIdx }) {
    const selectedCol = state.cols[colName];
    selectedCol.splice(newIdx, 0, selectedCol.splice(oldIdx, 1)[0]);

    commit('setColumnData', {
      colName,
      data: selectedCol,
    });
  },
};
