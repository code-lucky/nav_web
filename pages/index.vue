<template>
  <AppLoading v-if="isLoading" />
  <div class="top" @click="toTop" v-if="isToTop">
    <UpCircleOutlined style="font-size: 20px;color: rgb(111, 111, 111);" />
  </div>
  <div class="continer">
    <AppSidebar />
    <div class="continer-content">
      <!-- 内容 -->
      <div class="content">
        <ContentItem v-for="(item, idx) in arr" :label="item.title" :items="item.data" :key="idx" />
      </div>
      <AppFooter />
    </div>
  </div>
</template>
<script setup lang="ts">[[]]
import { nextTick, onMounted, reactive, ref } from 'vue';
import { getNavArray } from '../apis/category';
const isToTop = ref(false)
const isLoading = ref(true)
const arr = ref([])

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

const init = async() =>{
  const data = await getNavArray()

  arr.value = data.data
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
  window.onscroll = function (event) {
    // 处理鼠标滚动事件的代码
    if (document.documentElement.scrollTop > 100) {
      isToTop.value = true
    } else {
      isToTop.value = false
    }
  }
  nextTick(async ()=>{
    await init()
  })
})
</script>
<style scoped>
.continer {
  width: 100%;
  background-color: rgba(247, 247, 247, 1);
  padding: 0;
  margin: 0;
  display: flex;
}

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

.top {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: rgba(165, 162, 162, 0.4);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
  