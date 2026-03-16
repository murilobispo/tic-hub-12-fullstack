import { Category } from './model/category.model'
import { Product } from './model/product.model'
import { User, Role } from './model/user.model'
import { Cart} from './model/cart.model'

const electronics = new Category(1, 'Eletrônicos')
const phone = new Product(1, 'Smartphone', 1499.99, electronics)
const headphone = new Product(2, 'Fone de Ouvido', 149.99, electronics)

const user: User = {
  id: 1,
  username: 'Murilo',
  email: 'murilo@gmail.com',
  role: Role.CUSTOMER
}

const cart = new Cart()

cart.addItem({ product: phone, quantity: 1 })
cart.addItem({ product: headphone, quantity: 2 })
cart.addItem({ product: phone, quantity: 1 })

console.log('Usuário:', user.username, '| Role:', user.role)
console.log('Itens no carrinho:', cart.items)
console.log('Total de unidades:', cart.getTotalItems())
console.log('Preço final: R$', cart.getFinalPrice())  