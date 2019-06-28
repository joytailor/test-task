<template>
    <div>
        <ElRow
            type="flex"
            justify="start"
            align="middle"
        >
            <ElCol :span="4">
                <Link />
            </ElCol>
            <ElCol :span="15">
                <Form />
            </ElCol>
        </ElRow>
        <ElRow
            type="flex"
            justify="center"
        >
            <ElCol :span="12">
                <Table />
            </ElCol>
        </ElRow>
        <ElRow
            type="flex"
            justify="space-around"
        >
            <ElCol :span="6">
                <JSONForm />
            </ElCol>
        </ElRow>
    </div>
</template>

<script>

import Link from '@/components/modules/edit-table-page/Link.vue';
import Table from '@/components/modules/edit-table-page/Table.vue';
import Form from '@/components/modules/edit-table-page/Form.vue';
import JSONForm from '@/components/modules/edit-table-page/JSONForm.vue';


export default {
  components: {
    Link,
    Table,
    Form,
    JSONForm,
  },
};
</script>

<style lang="scss" scoped>

</style>
