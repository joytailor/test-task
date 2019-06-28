<template>
    <div>
        <Link />
        <ElRow
          type="flex"
          justify="center"
        >
          <ElCol :span="12">
            <Table />
          </ElCol>
        </ElRow>
    </div>
</template>

<script>

import Link from '@/components/modules/home-page/Link.vue';
import Table from '@/components/modules/home-page/Table.vue';

export default {
  components: {
    Link,
    Table,
  },
};
</script>

<style lang="scss" scoped>

</style>
