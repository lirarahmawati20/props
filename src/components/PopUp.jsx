/* eslint-disable react/prop-types */

function PopUp({ props, popupVisible, popup }) {
  const getImage = (imageName) => {
    return `./images/${imageName}`;
  };

  return (
    <div>

      {popupVisible && (
        <div className="popup">
          <div className="popup-detail-product">
            <div className="popup-header">
              
              <img
                src="../images/close.png"
                onClick={() => popup({})}
                alt="Close Popup"
              />
            </div>

            <div className="popup-product-image">
              <img className="popup-img" src={getImage(props.gambar)} alt="" />
            </div>

            <p className="nama">{props.nama}</p>
            <p className="harga">{props.harga}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
