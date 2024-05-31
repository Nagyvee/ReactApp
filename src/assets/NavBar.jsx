import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  faMagnifyingGlass,
  faUser,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add(fab);

export default function NavBar() {
  let cartNumber = useSelector((state) => state.count.count);
  return (
    <nav>
      <div className="nav-icon">
        <Link to={"/"}>
          <FontAwesomeIcon icon={["fab", "apple"]} />
        </Link>
      </div>
      <div className="nav-icon">
        <Link to={"/products/macbook"}>Mac</Link>
      </div>
      <div className="nav-icon">
        <Link to={"products/ipad"}>iPads</Link>
      </div>
      <div>
        <Link to={"/products/iphones"}>iPhones</Link>
      </div>
      <div>
        <Link to={"/products/watch"}>Watch</Link>
      </div>
      <div>
        <Link to={"products/others"}>Others</Link>
      </div>
      <div>
        <Link to={"/products/search"}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </div>
      <div>
        <Link  to={'/shopping-cart'}>
          <FontAwesomeIcon icon={faBasketShopping} />
        </Link>
        <span>{cartNumber}</span>
      </div>
      <div>
        <Link>
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </nav>
  );
}
