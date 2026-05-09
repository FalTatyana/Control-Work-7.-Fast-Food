import './order.css'
import { type ItemInfo } from '../../type'

interface Props {
    order: ItemInfo[]
    removeOnClick: (name: string) => void
}

const Order = ({ order, removeOnClick }: Props) => {
    return (
        <>
            {order.map((item: ItemInfo) => {
                return (
                    <div key={item.name} className="orderInfo">
                        <div className="orderName">{item.name}</div>
                        <div className="orderAmount">x{item.amount}</div>
                        <div className="orderPrice">{item.price * item.amount} KGZ</div>
                        <button onClick={() => removeOnClick(item.name)} className="btn">&#10060;</button>
                    </div>
                )
            })}
        </>


    )
}

export default Order