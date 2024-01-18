<template>
    <div class="loading">
        <a-spin size="large" />
    </div>
</template>
<style scoped>
.loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: rgba(250, 250, 250, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
}
</style>