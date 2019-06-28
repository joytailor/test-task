<template>
    <ElForm>
      <ElFormItem
        label="JSON"
      >
          <ElInput
            v-model="input"
            placeholder="Enter JSON array"
          />
      </ElFormItem>
      <ElFormItem>
        <ElButton
          type="primary"
          @click="onSubmit"
        >
          Import JSON
        </ElButton>
      </ElFormItem>
    </ElForm>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    input: '',
  }),
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
    onSubmit() {
      const json = JSON.parse(this.input);
      const newArray = this.usersList.concat(json);
      this.setUsersList(newArray);
      localStorage.setItem('users', JSON.stringify(newArray));
    },
  },
};
</script>

<style scoped>

</style>
