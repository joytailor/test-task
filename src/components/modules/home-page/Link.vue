<template>
    <ElRow
        justify="center"
        align="middle"
        class="top-row"
    >
        <router-link to="/edit">
            <ElButton type="success">
                Add User
            </ElButton>
        </router-link>
    </ElRow>
</template>

<style scoped>
    .top-row {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>
