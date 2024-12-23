import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";

export default function LoadScreen({ onFadeComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade-out before unmounting
    const fadeTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 2500); // Start fading out after 2.5 seconds

    // Notify parent when fade-out is complete
    const completeTimeout = setTimeout(() => {
      onFadeComplete();
    }, 3000); // Complete fade-out after 3 seconds

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onFadeComplete]);

  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#00000",
        opacity: fadeOut ? 0 : 1, // Fade out effect
        transition: "opacity 0.2s ease-in-out", // Smooth fade-out transition
      }}
    >
      <Spinner size="lg" color="black" />
    </div>
    </>
  );
}
