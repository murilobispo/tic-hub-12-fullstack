<template>
  <main>
    <article>
      <h1>{{ product.name }}</h1>
      <p>Preço: R$ {{ product.price.toFixed(2).replace('.', ',') }}</p>
      <p>Categoria: {{ product.category.title }}</p>
      <button @click="$emit('add', product)">Adicionar</button>
    </article>
  </main>
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