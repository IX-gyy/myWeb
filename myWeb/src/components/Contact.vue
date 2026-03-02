<template>
  <section id="contact" class="py-20 bg-black">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        联系我
      </h2>
      <div class="max-w-2xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <a href="mailto:example@example.com" class="bg-gray-900 p-6 rounded-lg flex items-center gap-4 hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span class="text-white">example@example.com</span>
          </a>
          <a href="https://github.com" target="_blank" class="bg-gray-900 p-6 rounded-lg flex items-center gap-4 hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            <span class="text-white">GitHub</span>
          </a>
        </div>
        <div class="text-center">
          <p class="text-gray-400 mb-4">如果您有任何问题或合作意向，欢迎随时联系我！</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Contact组件
</script>