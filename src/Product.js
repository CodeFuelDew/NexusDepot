import {useStateValue} from "./StateProvider"
import "./Product.css"

const Product = ({id, title, image, price, rating}) => {
    const [,dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({ 
                type:'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating
                },
            })
    }

    return (
        <div className="product">
            <img src={image} alt="" />
            <div className="product__info">
            
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price ? price.toFixed(2) : undefined }</strong>
                </p>
                <div className="product__rating">
                    { rating ?
                    Array(rating)
                    .fill().map((_,i) => (
                        <p key={i}>⭐</p>
                    )): undefined
                    }
                </div>
                
            </div>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;