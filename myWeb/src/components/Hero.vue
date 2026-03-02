<template>
  <section id="hero" class="min-h-screen flex items-center justify-center bg-black pt-20">
    <div class="container mx-auto px-4 text-center">
      <div class="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gradient">
        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20developer%20avatar%20portrait&image_size=square" alt="我的头像" class="w-full h-full object-cover">
      </div>
      <h1 class="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        你好，我是开发者
      </h1>
      <p class="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
        专注于前端开发，热爱创造美观且实用的用户界面
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#projects" class="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
          查看项目
        </a>
        <a href="#contact" class="px-8 py-3 border border-gray-700 rounded-full text-white font-medium hover:border-white transition-colors">
          联系我
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero组件
</script>

<style scoped>
.border-gradient {
  border-image: linear-gradient(to right, #3b82f6, #8b5cf6) 1;
}
</style>