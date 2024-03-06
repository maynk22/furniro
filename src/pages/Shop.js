import React, { useEffect, useState } from "react";
import "../styles/Shop.css";
import { products } from "../api";
import ProductCard from "../components/ProductCard";
import WarrantyBanner from "../components/WarrantyBanner";
function Shop() {
  // State to control burger menu visibility
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [shownProducts, setShownProducts] = useState(16);

  const [totalProducts, setTotalProducts] = useState(8);

  const [currentPage, setCurrentPage] = useState(1);

  const [filterProduct, setFilteredProduct] = useState(products);

  const [searchTerm, setSearchTerm] = useState("");

  const totalPages = Math.ceil(totalProducts / shownProducts);
  useEffect(() => {
    setTotalProducts(products.length);
  }, []);
  // Toggle function
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);

    console.log("Filter button clicked");
  };

  // Event handler for 'Show' dropdown

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredData = products.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredProduct(filteredData);
  };

  const handleShowChange = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setShownProducts(totalProducts); // Assuming 32 is your total count
    } else {
      setShownProducts(Number(value));
    }
    setCurrentPage(1); // Reset to the first page
  };

  const handleSortChange = (e) => {
    if (e.target.value === "priceInc") {
      const sortedData = [...filterProduct].sort((a, b) => a.cost - b.cost);
      setFilteredProduct(sortedData);
    } else if (e.target.value === "priceDesc") {
      const sortedData = [...filterProduct].sort((a, b) => b.cost - a.cost);
      setFilteredProduct(sortedData);
    } else if (e.target.value === "alphaInc") {
      const sortedData = [...filterProduct].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setFilteredProduct(sortedData);
    } else if (e.target.value === "alphaDesc") {
      const sortedData = [...filterProduct].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setFilteredProduct(sortedData);
    } else if (e.target.value === "rating") {
      const sortedData = [...filterProduct].sort((a, b) => a.rating - b.rating);
      setFilteredProduct(sortedData);
    } else {
      setFilteredProduct(products);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="shopBanner">
        <h2>Shop</h2>
        <p>
          <span>Home {">"} </span>
          Shop
        </p>
      </div>
      <div className="filter-container">
        {/* <div className="filter-header" id="filterToggle" onClick={toggleMenu}>
          <i className="fa-solid fa-sliders"></i>
          <p>Filters</p>
        </div> */}

        {/* <div
          className="filter-menu"
          id="burgerMenu"
          style={{ display: isMenuVisible ? "flex" : "none" }}
        >
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter1" />
            <label htmlFor="filter1">Filter 1</label>
          </div>
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter2" />
            <label htmlFor="filter2">Filter 2</label>
          </div>
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter3" />
            <label htmlFor="filter3">Filter 3</label>
          </div>
        </div> */}

        <input
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: "10px",
            margin: "10px",
            borderRadius: "24px",
            width: "200px",
          }}
        />

        <div className="showingProducts">
          <p>
            Showing {shownProducts} products of {totalProducts}
          </p>
        </div>

        <div className="showCounter">
          <p>Show:</p>
          <select id="showCount" defaultValue="16" onChange={handleShowChange}>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="all">All</option>
          </select>
        </div>

        <div className="sortBy">
          <p>Sort by:</p>
          <select id="sortBy" onChange={handleSortChange}>
            <option value="all">All</option>
            <option value="priceInc">Price (Low to High)</option>
            <option value="priceDesc">Price (High to Low)</option>
            <option value="alphaInc">Alphabetical (A-Z)</option>
            <option value="alphaDesc">Alphabetical (Z-A)</option>
            <option value="rating">Ratings</option>
          </select>
        </div>
      </div>
      <div>
        <div className="productsContainer">
          {filterProduct.length ? (
            filterProduct
              .slice(
                (currentPage - 1) * shownProducts,
                currentPage * shownProducts
              )
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          ) : (
            <div
              style={{
                fontFamily: "bold",
                fontSize: "larger",
                margin: "40px",
                padding: "20px",
              }}
            >
              No Products Available
            </div>
          )}
        </div>

        <div className="pagination">
          {currentPage > 1 && (
            <button className="page-button" onClick={handlePrevPage}>
              Previous
            </button>
          )}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`page-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button className="page-button" onClick={handleNextPage}>
              Next
            </button>
          )}
        </div>
      </div>
      <WarrantyBanner />
    </div>
  );
}

export default Shop;
