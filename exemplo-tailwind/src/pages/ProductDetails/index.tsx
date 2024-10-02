import { Link, useLocation } from "react-router-dom";

import styles from "./styles.module.css";
import { Product } from "../../models/Product";

type Location = {
  state: {
    product: Product;
  };
};

const ProductDetails = () => {
  const location: Location = useLocation();
  const { product } = location.state;

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div>
          <span className={styles.key}>Descrição:</span>
          <span>{product.description}</span>
        </div>

        <div>
          <span className={styles.key}>Preço:</span>
          <span>{product.price}</span>
        </div>

        <div>
          <span className={styles.key}>Data de lançamento:</span>
          <span>{product.releaseDate.toLocaleDateString()}</span>
        </div>

        <div>
          <span className={styles.key}>Qtde em estoque:</span>
          <span>{product.stock}</span>
        </div>

        <Link className={styles.backButton} to="/">
          <span>Voltar</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
