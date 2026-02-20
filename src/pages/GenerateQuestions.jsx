import Sidebar from "../components/Sidebar";

export default function GenerateQuestions() {
  return (
    <div className="flex bg-gray-50 min-h-screen">

      <Sidebar />

      <div className="flex items-center justify-center w-full">

        <div className="bg-white p-10 rounded-xl shadow text-center">

          <h2 className="text-xl font-semibold mb-4">
            Generating Interview Questions
          </h2>

          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" />

        </div>

      </div>
    </div>
  );
}
