import { useState } from 'react'
import './App.css'
import Item from './components/items/item'
import burger from './assets/burger.jpg'
import coffee from './assets/coffee.avif'
import fries from './assets/fries.jpg'
import juce from './assets/juce.avif'
import shawarma from './assets/shawarma.jpg'
import tea from './assets/tea.jpeg'
import Order from './components/order/order'
import type { ItemData, ItemInfo } from './type'

const App = () => {
  const ITEMS: ItemData[] = [
    { name: 'Burger', price: 300, img: burger, amount: 0 },
    { name: 'Coffee', price: 250, img: coffee, amount: 0 },
    { name: 'Fries', price: 150, img: fries, amount: 0 },
    { name: 'Juce', price: 180, img: juce, amount: 0 },
    { name: 'Shawarma', price: 280, img: shawarma, amount: 0 },
    { name: 'Tea', price: 100, img: tea, amount: 0 }
  ]

  const [items, setItems] = useState<ItemInfo[]>(ITEMS);

  const addItem = (name: string) => {
    const copy = [...items]
    const item = copy.find(i => i.name === name)

    if (item) {
      item.amount += 1
      setItems(copy)
    }
  }

  const removeItem = (name: string) => {
    const copy = [...items]
    const item = copy.find(i => i.name === name)

    if (item && item.amount > 0) {
      item.amount -= 1
      setItems(copy)
    }
  }

  const order = items.filter(item => item.amount > 0)
  const sum = order.reduce((acc, item) => acc + item.price * item.amount, 0)

  return (
    <>
      <div className='container'>
        <div className="orderInfoWrapper">
          <div className="orderTitle">
            <h2 className='orderTitleText'>Order Details</h2>
          </div>
          <div className="orderList">
          {order.length > 0 ? (
              <Order
                order={order}
                removeOnClick={removeItem}
              />
            ) : (
              <>
                <p className="span"><b>Order is empty!</b></p>
                <span className="span">Please add some items.</span>
              </>
            )}
          </div>
          <div className="totalPrice">Total price: {sum} KGZ</div>
        </div>
        <div className="itemsContainer">
          <div className='titleWrapper'>
            <h2>Add Items</h2>
          </div>
          <div className="items">
            {items.map((item) => (
              <Item
                key={item.name}
                title={item.name}
                price={item.price}
                img={item.img}
                itemClicker={() => addItem(item.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </>

  )
}

export default App
