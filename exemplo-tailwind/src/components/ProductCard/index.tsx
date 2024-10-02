import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { Product } from "../../models/Product";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      <Link to="/produto" state={{ product }}>
        <p className={styles.productDescription}>{product.description}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
