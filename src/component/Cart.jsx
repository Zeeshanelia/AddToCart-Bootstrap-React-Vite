import React from "react";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  const handleIncrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item?.id === id ? { ...item, count: item?.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item?.id === id && item.count > 1
          ? { ...item, count: item?.count - 1 }
          : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    const filteredItem = cartAllProduct?.filter((item) => item?.id !== id);
    setCartAllProduct(filteredItem);
  };

  return (
    <div className="container-fluid">
      <div className="row p-3 gap-3">
        {cartAllProduct?.length > 0 ? (
          cartAllProduct.map((product) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 border rounded d-flex flex-column p-3"
              key={product?.id}
              style={{
                backgroundColor: "#f9f9f9",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="p-2 d-flex justify-content-center">
                <img
                  src={product?.img}
                  alt={product?.model}
                  className="img-fluid"
                  style={{
                    maxHeight: "200px", // Ensure the image doesn't become too large
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="p-2 d-flex flex-column gap-2">
                <h5 className="text-center text-truncate" style={{ fontSize: "1rem" }}>
                  {product?.model?.toUpperCase()}
                </h5>
                <p className="text-center fs-6">
                  <span className="fw-bold">RS:</span> {product?.price}
                </p>
                <p className="m-0 text-center text-muted">{product?.space}</p>
                <p className="m-0 text-center text-muted">{product?.camera}</p>

                <div className="d-flex justify-content-center gap-2 mt-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => handleDecrement(product?.id)}
                    style={{ padding: "5px 10px" }}
                  >
                    -
                  </button>
                  <p className="m-0" style={{ fontSize: "1.2rem" }}>{product?.count}</p>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => handleIncrement(product?.id)}
                    style={{ padding: "5px 10px" }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-2">
                <p
                  className="m-0 text-truncate"
                  style={{
                    maxWidth: "70%",
                    fontSize: "0.85rem", // Make the description text smaller
                  }}
                >
                  {product?.description}
                </p>
                <button
                  className="btn btn-link text-danger p-0"
                  onClick={() => handleDeleteItem(product?.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <h3 className="text-center">No Products Available in Cart</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
