<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
  <div>
    <Disclosure />
  </div>
</template>

<script>
import Counter from './_components/Counter.vue'
import Disclosure from './_components/Disclosure.vue'
const components = { Counter, Disclosure }
export default { components }
</script>
