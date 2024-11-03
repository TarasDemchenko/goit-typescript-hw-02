import { Image } from "../../types";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  image: string
}


const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div>
      <img src={image} className={s.img} />
    </div>
  );
};

export default ImageCard;
