<template>
  <Card :style="{width: '100%', minWidth:'200px', maxWidth:'220px'}"
    class="p-4 shadow-lg rounded-lg">
    <template #header>
      <img :src="'https://picsum.photos/200'" 
      class="w-full object-cover"
      />
    </template>
    <template #title>
      <h1>{{ product.name }}</h1>
    </template>
    <template #content>
      <p>{{ product?.description }}</p>
      <p>R$: {{ product.price.toFixed(2).replace('.', ',') }}</p>
    </template>
    <template #footer>
      <div class='flex flex-row-reverse'>
        <Button @click="$emit('add', product)" >Adicionar</Button>

      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { Product } from '@/models/product.model'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  emits: ['add']
})
</script>