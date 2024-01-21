<template>
    <div style="height: 20px;"></div>
    <div class="sidebar">
        <div style="height: 20px;"></div>
        <a-menu selectable="false" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline"
            :items="menuList" @click="handleClick"></a-menu>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref, watch, VueElement, h, onMounted, nextTick } from 'vue';
import type { MenuProps, ItemType } from 'ant-design-vue';
import { categoryList } from '../apis/category';
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

const menuList: ItemType[] = reactive([])

const handleClick: MenuProps['onClick'] = e => {
    const link = e.item.originItemValue?.label;
    const jump = document.querySelector(`#${link}`) as HTMLElement
    jump.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
};

watch(openKeys, val => {
    console.log('openKeys', val);
})

const init = async () => {
    const result = await categoryList();
    result.data.forEach((elm) => {
        menuList.push(getItem(elm.name, elm.id, () => h('')),)
    })
}
onMounted(() => {
    nextTick(async () => {
        await init()
    })
})
</script>
<style scoped>
.sidebar {
    width: 200px;
    height: calc(100vh - 240px);
    background-color: #fff;
    margin: 20px;
    border-radius: 10px;
    position: sticky;
    top: 5px;
}
</style>
    