<!-- 导航标签列表和标题 -->
<template>
    <div class="content-title" :id="label">{{ label }}</div>
    <div class="content-items">
        <a-tooltip placement="bottom" v-for="(item, idx) in items" :key="idx">
            <template #title>
                <span>{{ item.desc }}</span>
            </template>
            <a-card hoverable class="content-item">
                <div class="content-card" @click="toGo(item.link)">
                    <img class="content-item-img" :src="'http://127.0.0.1:3002/uploads/' + item.icon" />
                    <div class="content-item-info">
                        <div class="content-item-info-title">{{ item.label }}</div>
                        <div class="content-item-info-desc">{{ item.desc }}</div>
                    </div>
                </div>
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

const toGo = (link: string) =>{
    window.open(link,'_blank')
}
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
    cursor: pointer;
}

.content-card{
    display: flex;
    align-items: center;
}

.content-item-img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
}

.content-item-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 10px;
}

.content-item-info-desc{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 180px;
}
</style>