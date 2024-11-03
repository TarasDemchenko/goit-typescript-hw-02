import { Image } from "../../../src/types";
import ImageCard from "../imageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[]
  openModal: (imageId: string)=> void
 }


const ImageGallery:React.FC<ImageGalleryProps> = ({ openModal, images }) => {
  return (
    <div>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li
            onClick={() => openModal(image.id)}
            key={image.id}
            className={s.list}
          >
            <ImageCard image={image.urls.small} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
