import './item.css'

interface Props {
  title: string
  price: number
  img: string
  itemClicker: () => void
}

const Item = ({ title, price, img, itemClicker }: Props) => {
  return (
    <div onClick={itemClicker} className='itemWrapper'>
      <div className="imgWrapper">
        <img className='img' src={img} alt={title} />
      </div>
      <div className="itemInfo">
        <div className="title">{title}</div>
        <span className="price">Price: {price} KGZ</span>
      </div>
    </div>
  );
};

export default Item