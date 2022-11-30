import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Product } from "../../features/Product/productSlice";
import { addToCart } from "../../features/Cart/cartSlice";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  const products: Product[] = await res.json();

  const paths = products.map((product: Product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params?.id as string}`
  );

  const product: Product = await res.json();

  return {
    props: {
      product,
    },
  };
};

type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const item = cartItems.find((item) => item.id === product.id);

    if (item) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartItems, product.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Layout>
      <section className={styles.contentWrapper}>
        <Link href="/">
          <button className={styles.backButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={styles.backButtonIcon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Back To Home
          </button>
        </Link>

        <div className={styles.productContainer}>
          <Image
            src={product.image}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "50%", height: "auto" }}
          />

          <div className={styles.productDetails}>
            {/* title */}
            <h3 className={styles.productTitle}>{product.title}</h3>

            {/* descriptiopn */}
            <p className={styles.productDescription}>{product.description}</p>

            {/* category */}
            <p className={styles.productCategory}>
              Category:{" "}
              {product.category[0].toUpperCase() + product.category.slice(1)}
            </p>

            {/* price */}
            <span className={styles.productPrice}>${product.price}</span>

            {/* add to cart */}
            <button className={styles.addToCart} onClick={handleAddToCart}>
              {isInCart ? "In Cart" : "Add To Cart"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={styles.addToCartIcon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
