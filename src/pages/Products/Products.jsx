import React from "react";
import "./Products.css";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";

import products from "../../data/products";
import productTitle from "../../data/productTitle";
import productDesc from "../../data/productDesc";

const Products = () => {
  const { productsCategorii } = useParams();
  const product = products.filter((p) => p.categorii === productsCategorii);
  return (
    <div className="products">
      <div className="products-title">
        {productTitle
          .filter((title) => title.categorii === productsCategorii)
          .map((t) => (
            <h1>{t.title}</h1>
          ))}
      </div>

      <div className="products-carusel">
        {product.map((produs) => {
          return (
            <ProductDisplay
              key={produs.id}
              id={produs.id}
              img1={produs.img1}
              img2={produs.img2}
              img3={produs.img3}
            />
          );
        })}
      </div>
      <div className="products-desc">
        {productDesc
          .filter((p) => p.categorii === productsCategorii)
          .map((item) => (
            <div className="products-desc-container">
              <div className="products-desc-li">
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
                <p>{item.desc3}</p>
                <p>{item.desc4}</p>
                <p>{item.desc5}</p>
                <p>{item.desc6}</p>
              </div>
              <button className="product-desc-button">
                <a href="tel:(+)40756452917">{item.button}</a>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
