<template>
    <ElTable
        :data="usersList"
        border
        height="500px"
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
        <ElTableColumn
            label="Edit"
            min-width="20"
        >
            <template>
                <router-link to="/edit">
                <div class="wrapper">
                    <ElButton
                        type="warning"
                        icon="el-icon-edit"
                    />
                </div>
                </router-link>
            </template>
        </ElTableColumn>
        <ElTableColumn
            label="Delete"
            min-width="20"
        >
            <template>
                <div class="wrapper">
                    <ElButton
                        type="danger"
                        icon="el-icon-delete"
                    />
                </div>
            </template>
        </ElTableColumn>
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

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        justify-content: center;
    }
</style>
