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
  const title = productTitle.find(
    (title) => title.categorii === productsCategorii
  );
  const desc = productDesc.find((p) => p.categorii === productsCategorii);
  return (
    <main className="products" aria-labelledby="products-section-title">
      <section className="products-title">
        {productTitle
          .filter((title) => title.categorii === productsCategorii)
          .map((t, idx) => (
            <h1 key={idx} id="products-section-title">
              {t.title}
            </h1>
          ))}
      </section>

      <section
        className="products-carusel"
        aria-label={`${title?.title} produse`}
      >
        {product.map((produs, idx) => {
          return (
            <ProductDisplay
              key={idx}
              id={produs.id}
              img1={produs.img1}
              img2={produs.img2}
              img3={produs.img3}
            />
          );
        })}
      </section>
      <section
        className="products-desc"
        aria-label={`${title?.title} descriere`}
      >
        {productDesc
          .filter((p) => p.categorii === productsCategorii)
          .map((item) => (
            <div className="products-desc-container">
              <div
                className="products-desc-li"
                aria-label="Beneficii și informații"
              >
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
                <p>{item.desc3}</p>
                <p>{item.desc4}</p>
                <p>{item.desc5}</p>
                <p>{item.desc6}</p>
              </div>
              <button className="product-desc-button">
                <a
                  href="tel:(+)40756452917"
                  aria-label={`Sună la DXD Motors pentru ofertă la ${title?.title}`}
                >
                  {item.button}
                </a>
              </button>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Products;
