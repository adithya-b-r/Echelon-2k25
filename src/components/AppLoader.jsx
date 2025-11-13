export default function AppLoader({ progress, status }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl mb-4">ECHELON 25</h1>

      <p className="text-lg opacity-80 mb-2">{status}</p>

      <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-sm">{progress}%</p>
    </div>
  );
}
