<template>
    <div style="height: 20px;"></div>
    <div class="sidebar">
        <div style="height: 20px;"></div>
        <a-menu id="dddddd" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline"
            :items="items" @click="handleClick"></a-menu>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref, watch, VueElement, h, onMounted } from 'vue';
import type { MenuProps, ItemType } from 'ant-design-vue';

const selectedKeys = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);

function getItem(
    label: VueElement | string,
    key: string,
    icon?: any,
    children?: ItemType[],
    type?: 'group',
): ItemType {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as ItemType;
}

const items: ItemType[] = reactive([
    getItem('AI写作工具', '1', () => h('')),
    getItem('AI图像工具', '2', () => h('')),
    getItem('AI视频工具', '3', () => h('')),
    getItem('AI办公工具', '4', () => h('')),
    getItem('AI对话聊天', '5', () => h(''))
]);

const handleClick: MenuProps['onClick'] = e => {
    console.log('click', e);
};

watch(openKeys, val => {
    console.log('openKeys', val);
})

onMounted(() => {

})
</script>
<style scoped>
.sidebar {
    width: 200px;
    height: calc(100vh - 240px);
    background-color: #fff;
    margin: 20px;
    border-radius: 10px;
}
</style>
    