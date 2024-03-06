import React, { useState } from "react";
import { products } from "../api";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import "../styles/Product.css";
import ProductSize from "../components/ProductSize";
import ProductColors from "../components/ProductColors";
import CounterWithCart from "../components/CounterWithCart";
import ProductCard from "../components/ProductCard";
function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  // If the product has sizes, set the first size as default, otherwise null
  const defaultSize =
    product && product.size && product.size.length > 0 ? product.size[0] : null;

  // If the product has colors, set the first color as default, otherwise null
  const defaultColor =
    product && product.colors && product.colors.length > 0
      ? product.colors[0]
      : null;
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  // Check if product is defined before rendering
  if (!product) {
    return <div>Product not found</div>;
  }

  const getRelatedProducts = (currentProduct) => {
    return products
      .filter((product) => {
        // Skip the current product
        if (product.id === currentProduct.id) return false;

        // Find products with matching tags
        return product.tags.some((tag) => currentProduct.tags.includes(tag));
      })
      .slice(0, 4); // Limit to first 4 products
  };
  const relatedProducts = getRelatedProducts(product);
  return (
    <div>
      <div className="productNav">
        <p>
          <Link to="/">Home</Link>
          <span>{">"}</span>
          <Link to="/shop">Shop</Link>
          <span>{">"}</span>
          <span className="productNameSpan">{product.name}</span>
        </p>
      </div>
      <div className="productDetails">
        <div className="productPicture">
          <img src={product.picture} alt={product.name} />
          {product.id % 3 === 0 ? (
            <div
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "green",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  height: "100%",
                  fontSize: "larger",
                }}
              >
                50%
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="productInformations">
          <h2>{product.name}</h2>
          <p className="productPrice">{product.cost}$</p>
          <Rating rating={product.rating} className="productRating" />
          <p className="productDescription">{product.description}</p>
          <ProductSize
            sizes={product.size}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <ProductColors
            colors={product.colors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <CounterWithCart
            product={product}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
          />
        </div>
      </div>
      <div className="productRefs">
        <div className="productRef">
          <p>SKU: {product.id}</p>
          <p>Category: {product.category}</p>
          <p>Tags: {product.tags.join(", ")}</p>
          <p>
            Share: <i className="fa-brands fa-facebook"></i>{" "}
            <i className="fa-brands fa-linkedin"></i>{" "}
            <i className="fa-brands fa-twitter"></i>{" "}
            <i className="fa-brands fa-instagram"></i>
          </p>
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <div className="relatedProducts">
          <h3>Related Products</h3>
          <div className="relatedProductsContainer">
            {relatedProducts.map((relatedProduct) => (
              <Link
                to={`/product/${relatedProduct.id}`}
                key={relatedProduct.id}
              >
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
