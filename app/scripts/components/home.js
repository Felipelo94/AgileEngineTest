import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../ProductsContext";
import Card from "./Card";

function home() {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <section id="home">
        <div className="content">
          <div className="wrapper">
            {products &&
              products.map((product, idx) => (
                <Card
                  key={idx}
                  img={product.picture}
                  title={product.name}
                  description={product.about}
                  price={product.price}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default home;
