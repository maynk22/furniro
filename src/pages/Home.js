import React, { useEffect } from "react";
import "../styles/Home.css";
import Button from "../components/Button";
import { products } from "../api";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import BottomCarousel from "../components/BottomCarousel";

function Home() {
  useEffect(() => {
    // Wait for a slight moment to ensure images are loaded, then trigger the animation
    setTimeout(() => {
      document.querySelectorAll(".gallery img").forEach((img) => {
        img.classList.add("animateImage");
      });
    }, 100);
  }, []);

  const [productCount, setProductCount] = useState(8);

  const images = [
    "https://picsum.photos/1400/1500",
    "https://picsum.photos/1200/1200",
    "https://picsum.photos/1300/1300",
    "https://picsum.photos/1500/1500",
  ];

  const showMoreProducts = () => {
    setProductCount((prevCount) => prevCount + 8);
  };

  const showLessProducts = () => {
    setProductCount(8);
  };
  return (
    <div>
      <div className="banner">
        <div className="newCollectionBanner">
          <p>New Arrival</p>
          <h2>Discover Our New Collection</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button text="BUY NOW" className="bannerBtn" />
        </div>
      </div>
      <div className="categories">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="categoriesCarousel">
          <div className="dining">
            <div className="diningImg"></div>
            <div className="diningTitle">
              <h3>Dining</h3>
            </div>
          </div>

          <div className="living">
            <div className="livingImg"></div>
            <div className="livingTitle">
              <h3>Living</h3>
            </div>
          </div>
          <div className="bedroom">
            <div className="bedroomImg"></div>
            <div className="bedroomTitle">
              <h3>Bedroom</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <h2 className="productsTitle">Our Products</h2>
        <div className="products_container">
          {products.slice(0, productCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {productCount < products.length && (
          <div className="showMoreBtn">
            <Button text="Show More" onClick={showMoreProducts} />
          </div>
        )}
        {productCount > 8 && (
          <div>
            <Button
              className="showLessBtn"
              text="Show Less"
              onClick={showLessProducts}
            />
          </div>
        )}
      </div>
      <div className="bottomHomeBanner">
        <div className="bottomBannerText">
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Button text="Explore more" />
        </div>
        <div className="bottomBannerImage">
          <div className="bottomBannerImageText">
            <p>01 — Bed Room</p>
            <h2>Inner Peace</h2>
          </div>
          <div className="bottomBannerImageBtn">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="bottomBannerCarousel">
          <BottomCarousel images={images} />
        </div>
      </div>
      <div className="shareGallery">
        <h3>Share your setup with</h3>
        <h2>#FurniroFurniture</h2>
        <div className="gallery">
          <div className="col1">
            <img
              className="galleryImg1"
              src="https://picsum.photos/1500/1500"
              alt="gallerypic"
            />
            <img
              className="galleryImg2"
              src="https://picsum.photos/1400/1600"
              alt="gallerypic"
            />
          </div>
          <div className="col2">
            <img
              className="galleryImg3"
              src="https://picsum.photos/1300/1500"
              alt="gallerypic"
            />
            <img
              className="galleryImg4"
              src="https://picsum.photos/1400/1300"
              alt="gallerypic"
            />
          </div>
          <div className="col3">
            <img
              className="galleryImg5"
              src="https://picsum.photos/1600/1500"
              alt="gallerypic"
            />
            <img
              className="galleryImg6"
              src="https://picsum.photos/1400/1200"
              alt="gallerypic"
            />
          </div>
          <div className="col4">
            <img
              className="galleryImg7"
              src="https://picsum.photos/1400/1500"
              alt="gallerypic"
            />
            <img
              className="galleryImg8"
              src="https://picsum.photos/1400/1400"
              alt="gallerypic"
            />
          </div>
          <div className="col5">
            <img
              className="galleryImg9"
              src="https://picsum.photos/1400/1400"
              alt="gallerypic"
            />
            <img
              className="galleryImg10"
              src="https://picsum.photos/1400/1500"
              alt="gallerypic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
