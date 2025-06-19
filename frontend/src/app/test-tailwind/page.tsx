export default function TestTailwind() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tailwind Test</h1>
        <p className="text-gray-600 mb-4">If you can see this styled correctly, Tailwind CSS is working!</p>
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Blue Button
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Green Button
          </button>
          <button className="btn-primary">
            Custom Button
          </button>
        </div>
      </div>
    </div>
  );
}
