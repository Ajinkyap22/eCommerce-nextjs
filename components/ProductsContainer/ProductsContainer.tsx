import React from "react";
import styles from "./ProductsContainer.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../features/Product/productSlice";

type ProductContainerProps = {
  products: Product[];
};

const ProductsContainer = ({ products }: ProductContainerProps) => {
  return (
    <div className={styles.productsContainer}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductsContainer;
