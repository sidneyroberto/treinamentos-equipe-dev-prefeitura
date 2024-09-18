import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Product } from "../../models/Product";
import productsList from "../../data/products.json";

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
    <div>
      <h1>Lista de produtos</h1>

      {products.length > 0 &&
        products.map((p, index) => (
          <div key={index}>
            <Link to="/produto" state={{ product: p }}>
              <p>{p.description}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
