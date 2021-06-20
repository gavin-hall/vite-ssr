<template>
  <div class="bg-gray-50 overflow-hidden shadow rounded-lg">
    <div class="px-4 py-5 sm:px-6 border-b border-gray-100">
      <h2 class="mb-2 text-xl font-bold">This is a panel with a feed component inside</h2>
      <div class="text-sm text-gray-500">Last updated June 25th, 2024</div>
    </div>
    <div class="bg-white px-4 py-5 sm:p-6">
      <Feed />
    </div>
  </div>
</template>
<script>
import Feed from './feed.vue'
const components = { Feed }
export default { components }
</script>

