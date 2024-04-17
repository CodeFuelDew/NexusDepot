import { useStateValue } from "./StateProvider"
import "./SubTotal.css"

const SubTotal = () => {

    const [{basket}] = useStateValue();

    const getSum = () => {
        let sum = 0;
        basket.forEach(
            item => {
                sum += item.price
            }
        )
        return sum;
    }

    function formatUSD(value) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(value);
      }

    return (
        <div className="subtotal">
            <>
                <p>
                    SubTotal( {basket?.length} items) :&nbsp;
                    <strong>{formatUSD(getSum())}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal