<template>
  <div class="loading" v-if="isLoading">
    <a-spin size="large" />
  </div>

  <div class="continer">
    <AppSidebar />
    <div class="continer-content">
      <!-- 内容 -->
      <div class="content">
        <ContentItem v-for="(item, idx) in arr" :label="item.label" :items="item.items" :key="idx" />
      </div>
      <AppFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
const isLoading = ref(true)

const arr = reactive([
  {
    label: 'AI写作工具',
    items: [{
      icon: '',
      name: 'ChatGPT',
      desc: 'OpenAI旗下AI对话工具'
    },
    {
      icon: '',
      name: 'ChatGPT',
      desc: 'OpenAI旗下AI对话工具'
    },
    {
      icon: '',
      name: 'ChatGPT',
      desc: 'OpenAI旗下AI对话工具'
    },
    {
      icon: '',
      name: 'ChatGPT',
      desc: 'OpenAI旗下AI对话工具'
    },
    {
      icon: '',
      name: 'ChatGPT',
      desc: 'OpenAI旗下AI对话工具'
    }]
  },
  {
    label: 'AI图像工具',
    items: [{
      icon: '',
      name: 'Stable Diffusion',
      desc: 'StabilityAI推出的文本到图像生成AI'
    },
    {
      icon: '',
      name: 'Stable Diffusion',
      desc: 'StabilityAI推出的文本到图像生成AI'
    },
    {
      icon: '',
      name: 'Stable Diffusion',
      desc: 'StabilityAI推出的文本到图像生成AI'
    },
    {
      icon: '',
      name: 'Stable Diffusion',
      desc: 'StabilityAI推出的文本到图像生成AI'
    },
    {
      icon: '',
      name: 'Stable Diffusion',
      desc: 'StabilityAI推出的文本到图像生成AI'
    },
    {
      icon: '',
      name: 'Stable Diffusion',
      desc: 'StabilityAI推出的文本到图像生成AI'
    }]
  },
  {
    label: 'AI视频',
    items: [{
      icon: '',
      name: 'Stable Diffusion',
      desc: 'StabilityAI推出的文本到图像生成AI'
    },
    {
      icon: '',
      name: 'Stable Diffusion',
      desc: 'StabilityAI推出的文本到图像生成AI'
    },
    {
      icon: '',
      name: 'Stable Diffusion',
      desc: 'StabilityAI推出的文本到图像生成AI'
    },
    {
      icon: '',
      name: 'Stable Diffusion',
      desc: 'StabilityAI推出的文本到图像生成AI'
    }]
  },
  {
    label: 'AI办公',
    items: [{
      icon: '',
      name: 'Stable Diffusion',
      desc: 'StabilityAI推出的文本到图像生成AI'
    }]
  },
  {
    label: 'AI对话聊天',
    items: [{
      icon: '',
      name: 'Stable Diffusion',
      desc: 'StabilityAI推出的文本到图像生成AI'
    }]
  }
])

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
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
  