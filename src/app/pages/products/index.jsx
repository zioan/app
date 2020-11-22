import React from "react";
import Seo from "../../seo";
import Product from "./product";
import products from "../../data/products.json";

export default function ProductsPage() {
  return (
    <>
      <Seo title="Products" />
      <h1>Products Page</h1>
      <div className="products">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </>
  );
}
