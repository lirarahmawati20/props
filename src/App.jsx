
import { useState } from "react";

import Product from "./components/Product";
import Header from "./components/Header";
import PopUp from "./components/PopUp";
function App(){

const products = [
  {
    id: 1,
    nama: "Infinix Note 12",
    harga: 1999000,
    gambar: "gambar11.png",
  },
  {
    id: 2,
    nama: "Iphone 12 pro",
    harga: 5976000,
    gambar: "gambar2.png",
  },
  {
    id: 3,
    nama: "Samsung Galaxy A13",
    harga: 2499000,
    gambar: "gambar3.png",
  },
  {
    id: 4,
    nama: "vivo Y21 ",
    harga: 2421000,
    gambar: "gambar4.png",
  },
  {
    id: 5,
    nama: "Samsung Galaxy A03",
    harga: 2191000,
    gambar: "gambar9.png",
  },
  {
    id: 6,
    nama: "Realmi 8i",
    harga: 2707000,
    gambar: "gambar6.png",
  },
  {
    id: 7,
    nama: "Oppo Reno7 z 5G",
    harga: 5269000,
    gambar: "gambar7.png",
  },
  {
    id: 8,
    nama: "vivo Y20s",
    harga: 3228500,
    gambar: "gambar8.png",
  },
];

  const [totalItem, setTotalItem] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  function hendlToCart(product) {
    // untuk menambahkan produk ke dalam array
    //  (...) d untuk membuat salinan array selectedProducts yang sudah ada dan menambahkan product ke dalamnya
    setSelectedProducts([...selectedProducts, product]);
    setTotalItem(totalItem + 1);
  }

    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    function popup({ nama, harga, gambar }) {
      setSelectedProduct({ nama, harga, gambar });
      setPopupVisible(true);
    }

  return (
    <>
      <header className="header">
        <div className="judul">
          <h1>LiraShopee.com</h1>
        </div>
        <Header totalItem={totalItem} selectedProducts={selectedProducts} />
      </header>
      <div className="produc-list">
        {products.map((product) => (
          <div key={product.id}>
            <Product
              product={product}
              hendlToCart={() => hendlToCart(product)}
            />
            <PopUp props={product} popupVisible={popupVisible} popup={popup} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
