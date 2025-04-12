import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/Frontend_Assets/star_icon.png";
import star_dull_icon from "../assets/Frontend_Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart}= useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam
          nulla quidem distinctio ad vero explicabo, architecto corporis facilis
          nesciunt est error corrupti omnis iste obcaecati voluptates commodi
          magnam quos!
        </div>
        <div className="right-size">
          <h1>Select Size</h1>
          <div className="right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{
          addToCart(product.id)
        }}>ADD TO CART</button>
        <p className="right-category">
          <span>Category:</span>Women, T-shirt,Top crop
        </p>
        <p className="right-category">
          <span>Tags:</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};
