import { useState } from 'react'
import './App.css'
import Item from './components/items/item'
import Order from './components/order/order'
import { ITEMS, type ItemInfo } from './type'
import EmptyOrder from './components/emptyOrder/emptyOrder'

const App = () => {
  const [items, setItems] = useState<ItemInfo[]>(ITEMS);

  const addItem = (name: string) => {
    const copy = [...items]
    const item = copy.find(i => i.name === name)

    if (item) {
      item.amount += 1
      setItems(copy)
    };
  };

  const removeItem = (name: string) => {
    const copy = [...items]
    const item = copy.find(i => i.name === name)

    if (item && item.amount > 0) {
      item.amount -= 1
      setItems(copy)
    };
  };

  const order = items.filter(item => item.amount > 0);
  const sum = order.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
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
            <EmptyOrder />
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
  )
};

export default App
