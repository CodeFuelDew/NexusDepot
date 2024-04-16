import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Header.css"
// import SearchIcon from "@mui/icons-material/Search"

const Header = () => {

    const [{basket}] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <div id="nav-logo">
                    <span className="nav-logo-base nav-sprite highlight_on_hover"/>
                </div>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="Search Amazon"/>
                {/* <SearchIcon className="header__searchIcon"/> */}
            </div>
            <div className="header__nav">
                <Link to="/login">
                    <div className="header__option highlight_on_hover">
                        <span className="header__optionLineOne">
                            Hello Guest
                        </span>
                        <span className="header__optionLineTwo">
                            Sign in
                        </span>
                    </div>
                </Link>

                <div className="header__option highlight_on_hover">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option"></div>
                <Link to="/checkout">
                    <div className="header__option header__optionBasket">
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;