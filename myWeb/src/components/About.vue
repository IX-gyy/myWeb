<template>
  <section id="about" class="py-20 bg-black">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        关于我
      </h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-gray-400 mb-6 text-lg">
            我是一名前端开发工程师，拥有多年的Web开发经验。我专注于使用现代前端技术栈创建美观、响应式且高性能的网站和应用程序。
          </p>
          <p class="text-gray-400 mb-6 text-lg">
            我热爱学习新技术，并不断提升自己的技能。我相信良好的代码质量和用户体验是成功项目的关键。
          </p>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-6 text-white">我的技能</h3>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="skill in skills" :key="skill" class="bg-gray-900 p-4 rounded-lg">
              <span class="text-white">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skills } from '../data/skills'
</script>