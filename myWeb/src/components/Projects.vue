<template>
  <section id="projects" class="py-20 bg-black">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        我的项目
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-colors">
          <div class="h-48 overflow-hidden">
            <img :src="project.image" :alt="project.name" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-white">{{ project.name }}</h3>
            <p class="text-gray-400 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.tech" :key="tech" class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                {{ tech }}
              </span>
            </div>
            <a :href="project.link" target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
              查看项目
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '../data/projects'
</script>