import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
function Card({data}) {
    const {productFullID} = useParams();
    const [imageIndex, setImageIndex] = useState(0);
    const [classActive, setClassActive] = useState(false);
    const toggleActive = (e) => {
        const id = e.target.id;
        console.log(id);
        setClassActive(!classActive)
    };
    const handleSetImageIndex = (index) => setImageIndex(index);

    return <div className="cardContainer">
        <span className={classActive ? "wishlistButton active" : "wishlistButton"} onClick={(e) => toggleActive(e)}>
            <i id={data.productId} className={ classActive ? "fas fa-heart" : "far fa-heart"}></i>
        </span>
        <div className="imageBlock">
            <span className="listingPrice">
                Actual Price: <span>{"$" + data.listingPrice}</span>
            </span>
            <span className="priceLabel">{"$" + data.salePrice}</span>
            <span className="discountLabel">{data.discount + "%"}</span>
            <Link to={`products:?${data.productId}`}><img src={data.images[imageIndex]} alt="" /></Link>
        </div>
        <div className="p_textBlock">
            <div className="sizesBlock" style={{display: "block"}}>
                <ul className="subImages"> 
                    {data.images.map((image, index) => 
                    <li className={imageIndex==index?'active':""} key={index}><img src={image} onMouseOver={()=> handleSetImageIndex(index)} alt="" /></li> )}
                </ul>
            </div>
            <div className="d-flex flex-column justify-content-between" style={{minHeight: "127px"}}>
                <div className="topBlock">
                    <Link to={`products:?${data.productId}`}>
                        <div className="p_name mb-2 text-black">{data.productName}</div>
                    </Link>
                    <div className="p_category">Brand: {data.brand}</div>
                </div>
                <div className="bottomBlock d-flex justify-content-between align-items-center">
                    <a href={data.URL} target="_blank" className="btn btn-dark btn-sm px-3 btn-outline-hover">Order Now</a>
                    <div className="d-flex align-items-center" style={{fontSize: "14px"}}>
                        <p className="mr-3 mb-0"><i className="fas fa-star text-warning"></i> <strong>{data.rating}</strong></p>
                        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                        <p className="mr-3 mb-0"><i className="fas fa-comment-alt text-secondary"></i> <strong>{data.reviews}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Card;
