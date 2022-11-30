import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

const ProductCard = ({
  id,
  title,
  price,
  image,
  category,
}: ProductCardProps) => {
  return (
    <Link href={`/products/${id}`}>
      <div className={styles.productCard}>
        {/* image */}
        <Image
          src={image}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto", margin: "auto" }}
        />

        {/* title */}
        <h3 className={styles.title}>{title}</h3>

        {/* category */}
        <span className={styles.category}>
          {category[0].toUpperCase() + category.slice(1)}
        </span>

        {/* price */}
        <span className={styles.price}>${price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
