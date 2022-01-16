import React, { useEffect, useState } from "react";
import data from "../../../server/data";
import Card from "./Card";

function home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div>
      <section id="home">
        <div className="content">
          <div className="wrapper">
            {products &&
              products.map((product) => (
                <Card
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
