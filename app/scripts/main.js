/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React, { useEffect, useState, useMemo } from "react";
import ReactDOM from "react-dom";

import Menu from "./components/menu";
import Home from "./components/home";
import data from "../../server/data";
import { ProductsContext } from "./ProductsContext";

/**
 * We can start our initial App here in the main.js file
 */
function App() {
  const [products, setProducts] = useState();

  const value = { products, setProducts };

  useEffect(() => setProducts(data), []);

  return (
    <div className="App">
      <ProductsContext.Provider value={value}>
        <Menu />
        <Home />
      </ProductsContext.Provider>
    </div>
  );
}

// Render this out
ReactDOM.render(<App />, document.getElementById("root"));
