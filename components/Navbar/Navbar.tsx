import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            viewBox="-119.793 -241.49075 1038.206 1448.9445"
            className={styles.logo}
          >
            <path d="M589.78.003c68.56 0 137.13-.01 205.69.01.04 15.44-.08 30.89.07 46.34-17.42.76-35.23 2.71-51.27 10-16.27 7.31-29.91 20.61-36.93 37.08-83.37 195.98-166.68 391.98-249.96 588-1.44 3.22-2.6 6.55-4.28 9.66-29.82-.35-59.65-.05-89.47-.16-13.16-26.15-26.11-52.41-39.38-78.5-15.21 40.76-30.51 81.48-45.72 122.23 98.37.01 196.74 0 295.11.01 18.01.24 36.56-.51 53.41-7.55 28-11.25 50.29-32.99 68.43-56.56 21.9-28.56 38.52-60.71 53.33-93.38 16.61-.14 33.21.05 49.81.02-31.48 67.24-63.12 134.42-94.88 201.53-226.68.01-453.35 0-680.03 0 5.52-14.41 10.77-28.94 16.69-43.2.36-1.47 2.19-1.1 3.3-1.24 28.3-.21 56.79-1.31 84.56-7.2 14.45-3.39 29.4-7.91 40.52-18.23 5.88-5.61 7.71-13.8 9.66-21.36 26.77-71.64 53.58-143.27 80.37-214.9-56.62-120.64-113.43-241.21-170.08-361.84-4.56-10.55-10.58-21-20.05-27.87-19.6-14.68-45.07-16.54-68.67-17.48-.02-17.29 0-34.57-.01-51.86 79.59-.03 159.17-.02 238.76-.01.01 17.29.02 34.58-.01 51.87-10.37.66-21.38.49-30.77 5.62-4.66 2.2-7.4 7.74-6.2 12.78 1.47 8.25 7.99 14.14 11.29 21.59 33.61 72.39 67.22 144.79 100.93 217.15 16.89-47.23 33.78-94.45 50.74-141.65 2.49-6.56 3.37-14.14.53-20.74-2.23-5.21-7.29-8.43-12.28-10.6-9.7-4-20.36-3.96-30.64-4.7 5.25-14.59 10.53-29.18 15.97-43.69 1.26-.81 3.01-.19 4.46-.39 80.75.05 161.51 0 242.27.03-5.58 14.66-11.13 29.32-16.65 44-19.45.9-39.5 1.39-57.74 8.99-8.36 3.5-16.27 8.85-21.21 16.59-3.43 5.67-5.56 12-7.86 18.18-33.74 92.02-67.79 183.92-101.15 276.08 18.48 41.77 37.74 83.18 56.59 124.78 68.45-161.64 136.88-323.3 205.41-484.91 4.62-9.72 12.14-18.59 12.73-29.77.57-8.75-5.92-16.3-13.44-19.89-16.21-7.48-34.43-7.85-51.95-8.48-.02-15.46-.02-30.92 0-46.38zm124.47 870.339c21.61 22.38 43.05 44.91 64.45 67.48-.03-20.98.09-41.97.07-62.95 3.7.01 7.4-.03 11.11-.08.01 29.95.01 59.91 0 89.86-21.63-22.27-42.94-44.84-64.46-67.22.03 21.11-.05 42.23-.06 63.35-3.71.03-7.41.02-11.11.02-.01-30.16-.02-60.31 0-90.46zm-629.09 3.081c23.81-3.66 49 14.98 51.12 39.26 2 13.89-3.39 28.37-13.56 37.94-16.72 16.36-46.79 16.06-63.02-.88-8.77-8.5-13.77-20.75-13.24-32.98.24-21.28 17.83-40.29 38.7-43.34m.01 11c-13.86 2.26-25.14 14.43-27.08 28.22-2.64 15.67 7.03 32.53 22.16 37.65 13.24 5 29.35.29 37.85-11.01 10.99-13.79 9.13-36.04-4.39-47.49-7.6-6.91-18.59-9.19-28.54-7.37zm171.93-6.37c12.2-9.16 32.13-5.37 39.17 8.47-2.94 1.66-5.88 3.33-8.82 4.99-5.29-8.27-18.18-10.29-25.29-3.27-3.01 2.2-2.68 6.23-2.36 9.54.86 4.32 5.46 6.15 8.85 8.18 8.74 4.6 19.24 7.25 25.38 15.59 6.85 9.31 5.72 23.17-1.75 31.79-7.81 9.45-22.09 11.75-33.01 6.8-8.38-4.14-13.56-12.89-15.24-21.86 3.75-.89 7.52-1.71 11.28-2.55.38 8.18 6.73 16.45 15.37 16.6 11.66 1.27 20.93-13.89 14.14-23.56-7.25-9.87-21.23-10.01-29.57-18.54-9.82-8.03-8.83-25.34 1.85-32.18zm398.07-4.691c15.6-1.95 31.72 5.25 41.3 17.59 13.81 17.28 11.6 44.85-4.79 59.71-9.36 9.25-23.12 13.06-36.04 11.69-12.77-.84-24.72-8-32.09-18.36-7.94-11.05-10-25.82-6.24-38.81 4.91-16.83 20.57-29.62 37.86-31.82m-1.91 11.21c-17.2 2.93-29.5 21.25-26.48 38.29 1.91 16.39 17.46 29.73 33.91 29.42 11.22.19 21.92-6.17 27.97-15.47 9.19-13.32 6.77-33-5.07-43.96-7.75-7.85-19.72-10.5-30.33-8.28zM8.94 874.813c3.55-.02 7.1-.02 10.65 0 .01 25.39-.01 50.79.01 76.18 8.82.02 17.63 0 26.45.01.02 3.26.02 6.52.01 9.79-12.38.01-24.75.02-37.12 0 .01-28.66.01-57.32 0-85.98zm135.95.07c3.76-.03 7.52-.02 11.29-.01.03 16.92-.05 33.85.04 50.77.17 7.44 1.09 15.62 6.35 21.35 8.37 8.21 24.81 7.04 30.65-3.6 2.95-5 3.81-10.92 3.73-16.64-.07-17.29-.07-34.58-.06-51.88 3.76-.02 7.52-.01 11.28 0 0 17.65.04 35.3-.01 52.95.02 8.01-1.37 16.48-6.49 22.92-11.01 15.25-36.53 16.12-48.59 1.71-5.73-6-8.09-14.46-8.17-22.6-.05-18.32-.01-36.65-.02-54.97zm77.17-.061c3.7-.04 7.41-.03 11.12-.01 0 28.66.01 57.32-.01 85.99-3.7 0-7.41.01-11.12-.02.02-28.65.02-57.31.01-85.96zm111.35.071c4.07-.11 8.16-.11 12.24-.09 8.54 20.9 16.95 41.85 25.34 62.81 8.37-20.89 16.98-41.68 25.16-62.64 4.19-.35 8.39-.11 12.59-.17-12.49 30.41-25.03 60.8-37.63 91.16-12.82-30.25-25.18-60.7-37.7-91.07zm80.42-.1c3.7.05 7.4.09 11.11.08.13 16.66-.02 33.33.12 49.99.26 7.91.87 16.88 6.91 22.74 6.97 5.97 18.07 6.34 25.51 1.03 4.33-3.08 6.71-8.2 7.65-13.3 1.48-8.78.95-17.71 1.05-26.57.06-11.29.07-22.58.05-33.87 3.56-.04 7.13-.03 10.7-.02.16 15.66.03 31.31.07 46.97.25 9.71-.06 20.25-5.97 28.45-10.35 14.93-34.17 16.54-47.27 4.41-6.55-6.06-9.84-15-9.89-23.82-.1-18.7-.02-37.39-.04-56.09zm77.06.08c3.86.01 7.72-.03 11.59-.07 0 28.66-.01 57.32 0 85.99-3.89.01-7.77.01-11.65 0-.04-28.64.09-57.28.06-85.92zm18.53 0c34.67.03 69.33-.06 104-.05-.01 3.43-.01 6.86 0 10.3-6.65.03-13.29 0-19.93.01-.03 25.22-.01 50.44-.01 75.66-3.87.01-7.73.01-11.6 0-.02-25.22.07-50.44-.04-75.66-13.61.02-27.22-.01-40.83.01-.02 25.22 0 50.43-.01 75.65-3.55.01-7.1.01-10.64 0-.01-25.22.01-50.43-.01-75.65-6.98-.02-13.95.01-20.93-.02-.01-3.42-.01-6.84 0-10.25z" />
          </svg>
        </h1>
      </Link>

      <Link href="/cart">
        <button className={styles.cart}>
          Cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.cartIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
