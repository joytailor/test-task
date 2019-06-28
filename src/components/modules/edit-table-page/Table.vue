<template>
    <ElTable
        :data="usersList"
        border
        height="300px"
        size="small"
        @row-click="selectRow"
    >
        <ElTableColumn
            prop="name"
            label="Name"
            min-width="20"
        />
        <ElTableColumn
            prop="surname"
            label="Surname"
            min-width="20"
        />
        <ElTableColumn
            prop="phone"
            label="Phone"
            min-width="30"
        />
        <ElTableColumn
            prop="email"
            label="Email"
            min-width="40"
        />
    </ElTable>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    const usersList = localStorage.getItem('users')
      ? JSON.parse(localStorage.getItem('users')) : [];
    this.setUsersList(usersList);
  },
  computed: {
    ...mapState({
      activeUser: state => state.activeUser,
      usersList: state => state.usersList,
    }),
  },
  methods: {
    ...mapActions([
      'setActiveUser',
      'setUsersList',
    ]),
    selectRow(row) {
      this.setActiveUser(row);
    },
  },
};
</script>
