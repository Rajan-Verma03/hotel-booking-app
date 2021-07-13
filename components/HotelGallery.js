import Image from "next/image";
import React from "react";

const HotelGallery = () => {
  return (
    <>
      {/* The Gallery View */}
      <div className="gallery">
        <figure className="gallery__item">
          <Image
            width="375"
            height="150"
            src="https://res.cloudinary.com/dev-rajan/image/upload/v1626012610/Hotel-Management-App/hotel-2_yvhi1u.jpg"
            alt="Photo of hotel 1"
            className="gallery__photo"
          />
        </figure>
        <figure className="gallery__item">
          <Image
            width="375"
            height="150"
            src="https://res.cloudinary.com/dev-rajan/image/upload/v1626012547/Hotel-Management-App/hotel-1_ubvdyk.jpg"
            alt="Photo of hotel 2"
            className="gallery__photo"
          />
        </figure>
        <figure className="gallery__item">
          <Image
            width="375"
            height="150"
            src="https://res.cloudinary.com/dev-rajan/image/upload/v1626012512/Hotel-Management-App/hotel-3_ikiehm.jpg"
            alt="Photo of hotel 3"
            className="gallery__photo"
          />
        </figure>
      </div>
    </>
  );
};

export default HotelGallery;
