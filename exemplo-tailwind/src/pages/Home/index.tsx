import { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { Product } from "../../models/Product";
import productsList from "../../data/products.json";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const arr: Product[] = [];
    productsList.forEach((obj) => {
      const { description, price, releaseDate, stock } = obj;
      const p: Product = {
        description,
        price,
        stock,
        releaseDate: new Date(releaseDate),
      };

      arr.push(p);
    });

    setProducts(arr);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Lista de produtos</h1>

      {products.length > 0 &&
        products.map((p, index) => <ProductCard key={index} product={p} />)}
    </div>
  );
};

export default Home;
