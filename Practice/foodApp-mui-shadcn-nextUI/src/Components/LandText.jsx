import { Text } from "@nextui-org/react";
// make GradientText a function component
export default function LandText() {
  return (
    <Text
      h1
      style={{
        background: "linear-gradient(90deg, #FFC593, #BC7198)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Gradient Text
    </Text>
  );
}