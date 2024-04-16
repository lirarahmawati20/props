/* eslint-disable react/prop-types */
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

function Product({ product, hendlToCart }) {
  const [liked, setList] = useState(false);

  const getImage = (imageName) => {
    return `./images/${imageName}`;
  };

  return (
    <>
      <div key={product.id} className="container">
        <img className="images" src={getImage(product.gambar)} alt="" />
        <h3>{product.nama}</h3>
        <h3> Rp. {product.harga}</h3>
        <div className="icon">
          <Heart
            onClick={() => setList(!liked)}
            fill={liked ? "red" : "black"}
          />
          <ShoppingCart onClick={() => hendlToCart(product)} />
        </div>
      </div>
    </>
  );
}

export default Product;
