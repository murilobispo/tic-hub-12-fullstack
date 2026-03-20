<template>
  <div>
		<Card :style="{width: '100%', minWidth:'200px', maxWidth:'220px'}"
    class="p-4 shadow-lg rounded-lg">
    <template #header>
      <img :src="'https://picsum.photos/200'" 
      class="w-full object-cover"
      />
    </template>
    <template #title>
			<h3>{{ item.product.name }}</h3>
    </template>
    <template #content>
      <p>{{ item.product.getPrice() }}</p>
    </template>
    <template #footer>
      <div class='flex flex-row-reverse'>
    		<Button @click="onRemoveItem(item.product)">Deletar</Button>
      </div>
    </template>
  </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { type CartItem } from '@/models/cart.model'
import type { Product } from '@/models/product.model'
export default defineComponent({
  props: {
    item: {
      type: Object as PropType<CartItem>,
      required: true,
    },
  },
  emits: ['removeItem', 'decrementItem'],
  methods: {
    onDecrementItem(product: Product) {
      this.$emit('decrementItem', product)
    },
    onRemoveItem(product: Product) {
      this.$emit('removeItem', product)
    },
  },
})
</script>