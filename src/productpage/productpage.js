import React from "react";

function ProductPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            SHOP
          </a>

          <button className="btn btn-outline-dark">
            🛒 Cart
          </button>
        </div>
      </nav>

      {/* Product */}
      <div className="container py-5">
        <div className="row g-5">

          {/* Image */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
                className="card-img-top"
                alt="Nike Shoes"
              />
            </div>
          </div>

          {/* Details */}
          <div className="col-md-6">

            <small className="text-muted">
              NIKE
            </small>

            <h1 className="fw-bold mt-2">
              Air Max Running Shoes
            </h1>

            {/* Rating */}
            <div className="mb-3">
              <span className="text-warning">
                ★★★★★
              </span>

              <span className="text-muted ms-2">
                4.8 (126 reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-3">
              <span className="fs-2 fw-bold">
                $129.99
              </span>

              <del className="text-muted ms-2">
                $159.99
              </del>

              <span className="badge bg-success ms-2">
                19% OFF
              </span>
            </div>

            {/* Description */}
            <p className="text-muted">
              Comfortable and lightweight running shoes
              designed for everyday use and training.
            </p>

            {/* Color */}
            <div className="mb-4">
              <label className="fw-bold mb-2">
                Color
              </label>

              <div>
                <button className="btn btn-dark me-2">
                  Black
                </button>

                <button className="btn btn-outline-dark me-2">
                  White
                </button>

                <button className="btn btn-outline-dark">
                  Blue
                </button>
              </div>
            </div>

            {/* Size */}
            <div className="mb-4">
              <label className="fw-bold mb-2">
                Size
              </label>

              <select className="form-select">
                <option>Select Size</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <label className="fw-bold mb-2">
                Quantity
              </label>

              <input
                type="number"
                className="form-control"
                defaultValue="1"
                min="1"
              />
            </div>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <button className="btn btn-dark btn-lg flex-grow-1">
                Add to Cart
              </button>

              <button className="btn btn-warning btn-lg">
                Buy Now
              </button>
            </div>

            {/* Delivery */}
            <div className="border-top mt-4 pt-3">
              <p>🚚 Free delivery</p>
              <p>↩️ 30-day returns</p>
              <p>🔒 Secure payment</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;