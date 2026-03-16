import { Product } from './product.model'
 
export interface CartItem {
  product: Product
  quantity: number
}
export class Cart {
	constructor(public items:CartItem[]=[]){}

	addItem(newItem: CartItem) {
		const exists = this.items.find(item => item.product.name === newItem.product.name)
		exists ? exists.quantity += newItem.quantity : this.items.push(newItem)
	}
	getTotalItems(){
		return this.items.reduce((total, item) => total + item.quantity, 0)
	}
	getFinalPrice(){
		return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
	}
}