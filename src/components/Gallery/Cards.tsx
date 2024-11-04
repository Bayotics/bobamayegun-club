'use client'
import React, { useState } from "react"

export default function Gallery   ({images}) {
  const [lightboxImage, setLightboxImage] = useState("");
  const [lightboxAltImage, setLightboxAltImage] = useState("");

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage(src);
    setLightboxAltImage(alt);
  };

  const closeLightbox = () => {
    setLightboxImage("");
    setLightboxAltImage("");
  };

  return (
    <div>
      <div className="gallery grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            type="button"
            className="gallery__item"
            key={index}
            onClick={() => openLightbox(image.src.src, image.alt)}
          >
            <img className="gallery__image rounded-xl" 
            src={image.src.src} alt={image.alt}/>
          </button>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox">
          <button
            type="button"
            className="lightbox__close-button"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <img
            className="lightbox__image"
            src={lightboxImage}
            alt={lightboxAltImage}
          />
          <button
            type="button"
            className="lightbox__bg"
            onClick={closeLightbox}
          />
        </div>
      )}
    </div>
  );
};
