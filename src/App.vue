<script lang="ts">
import { Product } from './models/product.model'
import { Category } from './models/category.model'
import { Cart } from './models/cart.model'
import ProductCard from './components/card/ProductCard.vue'

export default {
  components: { ProductCard },

  data() {
    return {
      products: [
        new Product(1, 'Guitarra', 200, new Category(1, 'Eletrônicos')),
        new Product(2, 'Violão', 350, new Category(1, 'Eletrônicos')),
      ],
      cartItems: new Cart()
    }
  },

  methods: {
    addToCart(product: Product) {
      this.cartItems.addItem({ product, quantity: 1 })
    }
  },

  computed: {
    getTotalItems() {
      return this.cartItems.getTotalItems()
    },
    getFinalPrice() {
      return this.cartItems.getFinalPrice().toFixed(2).replace('.', ',')
    }
  }
}
</script>

<template>
  <main>
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product" @add="addToCart" />
    </div>

    <section>
      <p>Total de itens: {{ getTotalItems }}</p>
      <p>Preço Final: R$ {{ getFinalPrice }}</p>
    </section>
  </main>
</template>