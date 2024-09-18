import { Link, useLocation } from "react-router-dom";

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
    <div>
      <div>
        <span>Descrição:</span>
        <span>{product.description}</span>
      </div>

      <div>
        <span>Preço:</span>
        <span>{product.price}</span>
      </div>

      <div>
        <span>Data de lançamento:</span>
        <span>{product.releaseDate.toLocaleDateString()}</span>
      </div>

      <div>
        <span>Qtde em estoque:</span>
        <span>{product.stock}</span>
      </div>

      <Link to="/">
        <span>Voltar</span>
      </Link>
    </div>
  );
};

export default ProductDetails;
