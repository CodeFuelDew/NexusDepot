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
                <div className="checkout__left">
                    <img className="checkout__ad" alt=""
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42342668_.jpg"/>
                
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>

                    { basket && basket.length > 0 ?
                        basket.map( (item, idx) =>
                    <CheckoutProduct key={idx} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                    ) : <p>Empty Basket</p>
                    }
                </div>

            </div>
            <div className="checkout__right">
                    <SubTotal/>
            </div>
        </div>
    </div>
    )
}

export default Checkout