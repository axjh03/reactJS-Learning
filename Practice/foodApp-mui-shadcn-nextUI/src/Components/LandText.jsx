export default function LandText() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen">
      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold animate-gradient bg-clip-text text-transparent"
        style={{
          backgroundImage: 'linear-gradient(to right, #4f46e5, #f59e0b, #ef4444)',
          backgroundSize: '200% auto',
          animation: 'gradient 3s linear infinite',
          textShadow: '0 0 20px rgba(79, 70, 229, 0.5)'
        }}
      >
        KALINCHOWK
      </h1>
      <h3
        className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-pink-600 bg-clip-text text-transparent mt-4"
      >
        Where Lalitpur munches with joy!!🍕
      </h3>
      <p className="text-2xl md:text-0.5xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 via-yellow-600 to-red-600 bg-clip-text text-transparent">📍 Kupondole, Lalitpur</p>
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
