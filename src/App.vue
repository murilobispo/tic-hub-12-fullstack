<script lang="ts">
import { Product } from './models/product.model'
import { Category } from './models/category.model'
import { Cart } from './models/cart.model'
import ProductCard from './components/card/ProductCard.vue'
import CartItem from './components/card/CartItem.vue'

export default {
  components: { ProductCard },

  data() {
    return {
      products: [
        new Product(1, 'Guitarra','22 Trastes', 200, new Category(1, 'Eletrônicos')),
        new Product(2, 'Violão','19 Trastes', 350, new Category(1, 'Eletrônicos')),
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
      <section class='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" @add="addToCart" />
      </div>
    </section>
  </main>
    
    <section>
      <p>Total de itens: {{ getTotalItems }}</p>
      <p>Preço Final: R$ {{ getFinalPrice }}</p>
    </section>
</template>