import {Image} from "@nextui-org/react";
import "../App.css"
export default function App() {
  return (
    <Image
      isZoomed
      isBlurred
      alt="NextUI Fruit Image with Zoom"
      src="https://nextui.org/images/fruit-1.jpeg"
      width={240}
    />
  );
}
