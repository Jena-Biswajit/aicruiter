import Sidebar from "../components/Sidebar";

export default function InterviewLink() {
  return (
    <div className="flex bg-gray-50 min-h-screen">

      <Sidebar />

      <div className="flex items-center justify-center w-full">

        <div className="bg-white p-8 rounded-xl shadow w-[500px] text-center">

          <h2 className="text-2xl font-bold mb-4">
            Your AI Interview is Ready!
          </h2>

          <input
            value="http://interview-link"
            readOnly
            className="border p-3 w-full rounded mb-4"
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Copy Link
          </button>

        </div>

      </div>
    </div>
  );
}
