<!-- 导航标签列表和标题 -->
<template>
    <div class="content-title" :id="label">{{ label }}</div>
    <div class="content-items">
        <a-tooltip placement="bottom" v-for="(item, idx) in items" :key="idx">
            <template #title>
                <span>{{ item.desc }}</span>
            </template>
            <a-card hoverable class="content-item">
                {{ item }}
            </a-card>
        </a-tooltip>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    items: {
        type: [Object],
        default: []
    },
    label: {
        type: String,
        default: ''
    }
})
</script>
<style scoped>
.continer-content {
    width: 100%;
    margin-top: 20px;
    margin-right: 20px;
}

.content-items {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
}

.content-item {
    width: 264px;
    height: 100px;
    border-radius: 10px;
    background-color: #fff;
    margin: 10px 20px 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>