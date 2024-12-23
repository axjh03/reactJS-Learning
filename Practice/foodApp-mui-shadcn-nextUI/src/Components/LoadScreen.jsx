import { Spinner } from "@nextui-org/react";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#121212", // Dark background
      }}
    >
      <Spinner size="lg" color="white" />
    </div>
  );
}
