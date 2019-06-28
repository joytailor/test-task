<template>
    <ElForm>
        <ElRow
            type="flex"
            justify="space-around"
            align="middle"
        >
        <ElCol :span="3">
            <ElFormItem>
                <ElInput
                    v-model="form.name"
                    placeholder="Name"
                />
            </ElFormItem>
        </ElCol>
        <ElCol :span="4">
            <ElFormItem>
                <ElInput
                    v-model="form.surname"
                    placeholder="Surname"
                />
            </ElFormItem>
        </ElCol>
        <ElCol :span="4">
            <ElFormItem>
                <ElInput
                    v-model="form.phone"
                    placeholder="Phone"
                />
            </ElFormItem>
        </ElCol>
        <ElCol :span="4">
            <ElFormItem>
                <ElInput
                    v-model="form.email"
                    placeholder="Email"
                />
            </ElFormItem>
        </ElCol>
        <ElCol :span="2">
            <ElFormItem>
                <ElButton
                    type="primary"
                    @click="onSubmit"
                >
                    Save
                </ElButton>
            </ElFormItem>
        </ElCol>
        <ElCol :span="2">
            <ElFormItem>
                <ElButton
                    type="success"
                    @click="prepareState"
                >
                    Create New
                </ElButton>
            </ElFormItem>
        </ElCol>
        </ElRow>
    </ElForm>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    form: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      id: '',
    },
  }),
  computed: {
    ...mapState({
      activeUser: state => state.activeUser,
      usersList: state => state.usersList,
    }),
  },
  methods: {
    ...mapActions([
      'addNewUser',
      'setActiveUser',
      'setUsersList',
    ]),
    onSubmit() {
      if (!this.form.name || !this.form.surname
            || !this.form.phone || !this.form.email) return;
      const userIncluded = this.usersList.find(el => el.id === this.activeUser.id);
      const newUser = {
        ...this.form,
      };
      if (userIncluded) {
        this.updateUser(newUser, userIncluded);
        return;
      }
      newUser.id = this.usersList.length;

      this.addNewUser(newUser);
      localStorage.setItem('users', JSON.stringify(this.usersList));
      this.prepareState();
    },
    prepareState() {
      this.setActiveUser({});
    },
    updateUser(user, userIncluded) {
      this.usersList.splice(userIncluded.id, 1, user);
      this.setUsersList(this.usersList);
      localStorage.setItem('users', JSON.stringify(this.usersList));
      this.prepareState();
    },
  },
  watch: {
    activeUser(val) {
      this.form.name = val.name || '';
      this.form.surname = val.surname || '';
      this.form.phone = val.phone || '';
      this.form.email = val.email || '';
    },
  },
};
</script>
