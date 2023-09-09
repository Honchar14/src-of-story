import React, {useState} from "react";
import "../AboutProduct.css"

const LeftSection = ({images}) => {

    const [enlargedImage, setEnlargedImage] = useState(null);

    const handleImageClick = (image) => {
        if (enlargedImage === image) {
            setEnlargedImage(null)
        } else {
            setEnlargedImage(image)
        }
    }


    return (
        <div className="left_section">
            <div className="image_grid">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="product_image"
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
            {enlargedImage && (
                <div className="modal_bg" onClick={() => setEnlargedImage(null)}>
                    <div className="modal_img">
                        <img src={enlargedImage} alt="Enlarged" />
                    </div>
                </div>
            )}
        </div>
    );
};
export default LeftSection