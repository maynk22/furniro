import React from "react";

function WarrantyBanner() {
  return (
    <div className="servicesBanner">
      <div className="highQuality">
        <div className="highQualityIcon">
          <i className="fa-solid fa-trophy"></i>
        </div>
        <div className="highQualityText">
          <h3>High Quality</h3>
          <p>Crafted from top materials</p>
        </div>
      </div>
      <div className="warrantyProtection">
        <div className="warrantyProtectionIcon">
          <i className="fa-regular fa-circle-check"></i>
        </div>
        <div className="warrantyProtectionText">
          <h3>Warranty Protection</h3>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="freeShipping">
        <div className="freeShippingIcon">
          <i className="fa-solid fa-truck-fast"></i>
        </div>
        <div className="freeShippingText">
          <h3>Free Shipping</h3>
          <p>Order over $150</p>
        </div>
      </div>
      <div className="support">
        <div className="supportIcon">
          <i className="fa-solid fa-headset"></i>
        </div>
        <div className="supportText">
          <h3>24 / 7 Support</h3>
          <p>Dedicated suppoty</p>
        </div>
      </div>
    </div>
  );
}

export default WarrantyBanner;
