import { memo, useReducer } from 'react'
import '../styles/Product.css'

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.product]

    case 'remove':
      const productIndex = state.findIndex(item => item.name === action.product.name);
      if (productIndex < 0) {
        return state;
      }
      const update = [...state]
      update.splice(productIndex, 1)
      return update

    default:
      return state
  }
}

// const totalReducer = (state, action) => {
//   switch (action.type) {
//     case 'add':
//       return state + action.price

//     case 'remove':
//       return state - action.price

//     default:
//       return state
//   }
// }

const getTotal = (cart) => {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, currencyOptions)
}

const Product = () => {
  const [cart, setCart] = useReducer(cartReducer, [])
  // const [total, setTotal] = useReducer(totalReducer, 0)

  const add = (product) => {
    setCart({ type: 'add', product })
  }

  const remove = (product) => {
    setCart({ type: 'remove', product })
  }

  // const cartReducer = (state, product) => [...state, product]
  console.log('Product component re-rendering.')

  return (
    <div>
      <div className="wrapper">
        <div>
          Shopping Cart: {cart.length} total items.
      </div>
        <div>Total: {getTotal(cart)}</div>

        <div>
          {products.map(product => (
            <div key={product.name}>
              <div className="product">
                <span role="img" aria-label={product.name}>{product.emoji}</span>
              </div>
              <button style={{ marginRight: 10 }} onClick={() => add(product)}>Add</button>
              <button onClick={() => remove(product)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(Product)
