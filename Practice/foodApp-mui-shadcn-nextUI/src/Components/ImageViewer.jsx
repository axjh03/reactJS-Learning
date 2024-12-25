import { Image } from "@nextui-org/react";
import "../App.css";

export default function ImageViewer(props) {
  return (
    <div className="image-center">
      <Image
      isZoomed
      isBlurred
      alt={props.alt || "Image"} // Added alt prop
      src={`${props.image}`}
      width={240}
    />
    </div>
  );
}
