import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { removeFromCart, clearCart } from "../features/Cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Cart.module.css";
import Layout from "../components/Layout/Layout";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartTotal = useAppSelector((state) => state.cart.total);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const placeOrder = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    dispatch(clearCart());
  };

  return (
    <Layout>
      <Link href="/">
        <button className={styles.backButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
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
          Continue Shopping
        </button>
      </Link>

      <section className={styles.cartContainer}>
        <h1>Cart</h1>

        <div className={styles.cartContent}>
          <ul className={styles.cartList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <Image
                  src={item.image}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: "50%",
                    height: "auto",
                    justifySelf: "center",
                  }}
                  alt=""
                />

                <div className={styles.cartItemDetails}>
                  <h3 className={styles.title}>{item.title}</h3>

                  <span className={styles.price}>${item.price}</span>

                  <button
                    className={`${styles.button} ${styles.removeButton}`}
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {!cartItems.length && <hr />}

          <div className={styles.orderInfo}>
            <h2 className={styles.total}>Total: ${cartTotal}</h2>

            <div hidden={!cartItems.length}>
              <button
                className={`${styles.button} ${styles.buttonAction} ${styles.clearCart}`}
                onClick={handleClearCart}
              >
                Clear Cart
              </button>

              <button
                className={`${styles.button} ${styles.buttonAction} ${styles.placeOrder}`}
                onClick={placeOrder}
              >
                Place Order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={styles.removeButtonIcon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.modal} hidden={!showModal}>
          <h2 className={styles.heading}>Thank you for your order!</h2>
          <p className={styles.message}>Your order is being processed.</p>

          <button
            className={`${styles.button} ${styles.buttonAction}`}
            onClick={closeModal}
          >
            Close
          </button>
        </div>

        <div className={styles.overlay} hidden={!showModal}></div>
      </section>
    </Layout>
  );
};

export default Cart;
