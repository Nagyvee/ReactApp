import { Macbooks } from "./Products";
import { Ipads } from "./Products";
import { Iphones } from "./Products";
import { Watches } from "./Products";
import { OtherItems } from "./Products";
import { Link, useLocation } from "react-router-dom";

export default function MacbooksComp() {
  const Urlpath = useLocation();

  let displayProductsCategories = null;
  let itemsCategory = "";

  if (Urlpath.pathname == "/products/macbook") {
    displayProductsCategories = Macbooks;
    itemsCategory = "Apple Macbooks";
  } else if (Urlpath.pathname == "/products/ipad") {
    itemsCategory = "Apple iPads";
    displayProductsCategories = Ipads;
  } else if (Urlpath.pathname == "/products/iphones") {
    itemsCategory = "Apple iPhones";
    displayProductsCategories = Iphones;
  } else if (Urlpath.pathname == "/products/watch") {
    itemsCategory = "Apple Watches";
    displayProductsCategories = Watches;
  } else if (Urlpath.pathname == "/products/others") {
    itemsCategory = "Other Apple Products";
    displayProductsCategories = OtherItems;
  }

  displayProductsCategories = displayProductsCategories.map((item) => {
    return (
      <>
      <Link to={`/product/${item.id}`}>
      <div key={item.id}>
        <img src={item.img} className="products-img" alt={item.name + ' image'}/>
        <h4>R {item.price}</h4>
        <p> {item.name}</p>
        <button>
          Configure Item &gt;
        </button>
      </div>
      </Link>
      </>
    );
  });

  return (
    <>
      <h2 className="item-category-heading">{itemsCategory}</h2>
      <div className="product-wrap">{displayProductsCategories}</div>
    </>
  );
}
