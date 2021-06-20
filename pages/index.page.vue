<template>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
    <div class="max-w-3xl mx-auto">
      <Panel />
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
    <div class="max-w-3xl mx-auto">
      <div class="grid gap-[2rem] grid-cols-[1fr,700px,2fr]">
        <div class="bg-red-100">1fr</div>
        <div class="bg-blue-100">700px</div>
        <div class="bg-yellow-100">2fr</div>
      </div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
    <div class="max-w-3xl mx-auto">
      <Disclosure />
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
    <div class="max-w-3xl mx-auto">
      <Dialog />
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
    <div class="max-w-3xl mx-auto">
      <RadioGroup />
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
    <div class="max-w-3xl mx-auto">
      <ActionsSharedBorders />
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
    <div class="max-w-3xl mx-auto">
      <Table />
    </div>
  </div>
  <!-- <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
    <div class="max-w-3xl mx-auto">
      
    </div>
  </div> -->
</template>

<script>
import Panel from './_components/panel.vue'
import Dialog from './_components/dialog.vue'
import RadioGroup from './_components/radio-group.vue'
import ActionsSharedBorders from './_components/actions-sharedborders.vue'
import Table from './_components/table.vue'
import Disclosure from './_components/disclosure.vue'
const components = { Panel, Dialog, RadioGroup, ActionsSharedBorders, Table, Disclosure }
export default { components }
</script>
