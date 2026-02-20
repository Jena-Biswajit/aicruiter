import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export default function CreateModal({ close }) {
  const nav = useNavigate();

  const create = () => {
    const id = uuid();
    nav(`/interview/${id}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-[#111] p-8 rounded-xl w-96">
        <h2 className="text-2xl mb-6">Create Interview</h2>

        <input
          placeholder="Role"
          className="w-full p-3 bg-black border border-gray-700 rounded mb-6"
        />

        <div className="flex justify-between">
          <button onClick={create} className="bg-purple-600 px-4 py-2 rounded">
            Generate Link
          </button>

          <button onClick={close} className="text-gray-400">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
