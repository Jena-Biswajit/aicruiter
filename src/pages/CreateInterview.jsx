import { useState } from "react";

export default function CreateInterview() {

  const [step, setStep] = useState(1);

  // form state
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");

  return (
    <div className="bg-[#f1f5f9] min-h-screen flex">

      {/* MAIN CONTENT */}

      <div className="flex-1 p-10">

        {/* HEADER */}

        <h2 className="text-2xl font-bold mb-6">
          ← Create New Interview
        </h2>

        {/* PROGRESS BAR */}

        <div className="h-2 bg-gray-200 rounded mb-8">
          <div
            className="h-2 bg-blue-600 rounded"
            style={{ width: `${step * 33}%` }}
          />
        </div>

        {/* STEP 1 — FORM */}

        {step === 1 && (
          <div className="bg-white p-8 rounded-xl shadow max-w-3xl">

            {/* JOB POSITION */}

            <label className="font-semibold">
              Job Position
            </label>

            <input
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g. Full Stack Developer"
              className="w-full border p-3 rounded mt-2 mb-6"
            />

            {/* DESCRIPTION */}

            <label className="font-semibold">
              Job Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter details job description"
              className="w-full border p-3 rounded mt-2 mb-6 h-32"
            />

            {/* DURATION */}

            <label className="font-semibold">
              Interview Duration
            </label>

            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border p-3 rounded mt-2 mb-6"
            >
              <option value="">Select Duration</option>
              <option>15 Min</option>
              <option>30 Min</option>
              <option>45 Min</option>
            </select>

            {/* TYPE */}

            <label className="font-semibold">
              Interview Type
            </label>

            <div className="flex gap-3 mt-3 mb-8">

              {["Technical", "Behavioral", "Experience", "Problem Solving"]
                .map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-4 py-2 rounded-lg border ${
                      type === t
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}

            </div>

            {/* GENERATE BUTTON */}

            <button
              onClick={() => setStep(2)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Generate Questions →
            </button>

          </div>
        )}

        {/* STEP 2 — GENERATING QUESTIONS */}

        {step === 2 && (
          <div className="bg-white p-10 rounded-xl shadow max-w-2xl text-center">

            <div className="text-4xl mb-4">⏳</div>

            <h3 className="text-xl font-semibold">
              Generating Interview Questions
            </h3>

            <p className="text-gray-500 mt-2">
              Our AI is crafting personalized questions based on your job position
            </p>

            <button
              onClick={() => setStep(3)}
              className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Continue →
            </button>

          </div>
        )}

        {/* STEP 3 — INTERVIEW LINK */}

        {step === 3 && (
          <div className="bg-white p-10 rounded-xl shadow max-w-2xl">

            <div className="text-center mb-6">

              <div className="text-4xl text-green-600">✔</div>

              <h3 className="text-xl font-bold mt-2">
                Your AI Interview is Ready!
              </h3>

              <p className="text-gray-500">
                Share this link with your candidates
              </p>

            </div>

            {/* LINK BOX */}

            <div className="border p-4 rounded-lg flex justify-between items-center">

              <span className="text-sm text-gray-600">
                http://ai-cruiter.app/interview/12345
              </span>

              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Copy Link
              </button>

            </div>

            <div className="mt-6 flex gap-4">

              <button className="border px-4 py-2 rounded">
                Slack
              </button>

              <button className="border px-4 py-2 rounded">
                Email
              </button>

              <button className="border px-4 py-2 rounded">
                WhatsApp
              </button>

            </div>

            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
              + Create New Interview
            </button>

          </div>
        )}

      </div>
    </div>
  );
}