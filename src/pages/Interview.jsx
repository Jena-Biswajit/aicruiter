import { useParams } from "react-router-dom";

export default function Interview() {
  const { id } = useParams();

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-6">AI Interview Session</h1>

      <div className="border border-gray-700 p-12 rounded-xl">
        🎤 AI Voice Interview Running...
      </div>

      <p className="text-gray-500 mt-6">ID: {id}</p>
    </div>
  );
}
