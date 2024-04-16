import { useStateValue } from "./StateProvider"

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

    return (
        <div className="subtotal">
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal