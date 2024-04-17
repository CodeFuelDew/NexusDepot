import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css"
const CheckoutProduct = ({id, image, title, price, rating}) => {

    const [,dispatch] = useStateValue();

    const removeFromBasket=() => {
        dispatch({ type:"REMOVE_FROM_BASKET", id:id})
    }

    return (
        <div className="checkoutProduct" key={id}>
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price"><small>$</small><strong>{price.toFixed(2)}</strong></p>
                <div className="checkoutProduct__rating">
                {
                    rating ?
                    Array(rating)
                    .fill()
                    .map((_i) => (<p key={_i}>⭐</p>))
                    : null
                }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct