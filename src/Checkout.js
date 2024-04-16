import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header"
import "./Checkout.css"
import {useStateValue} from "./StateProvider"
import SubTotal from "./SubTotal";

const Checkout = () => {

    const [{basket}] = useStateValue();

    return (
        <div>
            <Header/>
            <div className="checkout">
                <div className="checkout__left" src="" alt=""/>
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>

                    { basket ?
                        basket.map( item =>
                    <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                    ) :null
                    }
                </div>

            </div>
            <div className="checkout__right">
                    <SubTotal/>
            </div>
        </div>
    )
}

export default Checkout