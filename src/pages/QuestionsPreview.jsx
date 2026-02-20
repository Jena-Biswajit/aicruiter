import Sidebar from "../components/Sidebar";

export default function QuestionsPreview() {
  return (
    <div className="flex bg-gray-50 min-h-screen">

      <Sidebar />

      <div className="p-10 w-full">

        <h2 className="text-2xl font-bold mb-6">
          Generated Questions
        </h2>

        <div className="space-y-4">

          <div className="bg-white p-4 rounded shadow">
            Describe your experience with React.
          </div>

          <div className="bg-white p-4 rounded shadow">
            Explain REST API design.
          </div>

          <div className="bg-white p-4 rounded shadow">
            How do you optimize performance?
          </div>

        </div>

      </div>
    </div>
  );
}
