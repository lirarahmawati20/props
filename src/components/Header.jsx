/* eslint-disable react/prop-types */
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Header({ totalItem, selectedProducts }) {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartDetails = () => {
    setCartVisible(!cartVisible);
  };

  const handleBackToCart = () => {
    setCartVisible(false);
  };

  return (
    <div className="header-container">
      <div className="transaction">{totalItem}</div>
      <div className="icon-moll">
        <ShoppingCart onClick={showCartDetails} />
      </div>
      {cartVisible && (
        <div className="cart-details">
          <h3>
            Cart Details
            <img
              src="../images/close.png"
              onClick={handleBackToCart}
              className="back-button"
              alt="Close Button"
            />
          </h3>
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>
                <div>
                  <img
                    src={`./images/${product.gambar}`}
                    alt={product.nama}
                    style={{
                      width: "60px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  />
                  {product.nama} - Rp. {product.harga}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
