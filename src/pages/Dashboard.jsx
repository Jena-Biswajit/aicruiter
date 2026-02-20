// export default function Dashboard() {
//   return (
//     <div className="flex bg-[#f1f5f9] min-h-screen">

//       {/* SIDEBAR */}

//       <div className="w-64 bg-white p-6 border-r">

//         <h1 className="text-2xl font-bold mb-10">
//           AIcruiter
//         </h1>

//         <div className="space-y-5 text-gray-600">
//           <div>Dashboard</div>
//           <div>Scheduled Interview</div>
//           <div>All Interview</div>
//           <div>Billing</div>
//           <div>Settings</div>
//         </div>

//         <button className="mt-10 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
//           + Create New Interview
//         </button>

//       </div>

//       {/* MAIN */}

//       <div className="p-10 w-full">

//         <h1 className="text-2xl font-bold mb-6">
//           Welcome Back!
//         </h1>

//         <div className="grid grid-cols-2 gap-6">

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="font-semibold mb-2">
//               Create New Interview
//             </h2>
//             Create AI interviews and schedule them with candidates
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="font-semibold mb-2">
//               Create Phone Screening
//             </h2>
//             Schedule phone screening calls
//           </div>

//         </div>

//         <h2 className="text-xl font-bold mt-10 mb-4">
//           Previously Created Interviews
//         </h2>

//         <div className="bg-white p-6 rounded-xl shadow w-80">
//           <h3 className="font-semibold">
//             Full Stack React Developer
//           </h3>

//           <p className="text-gray-500">
//             15 Min Interview
//           </p>

//           <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
//             Send
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };

  return (
    <div className="flex bg-[#f1f5f9] min-h-screen">

      {/* SIDEBAR */}

      <div className="w-64 bg-white p-6 border-r">

        <h1 className="text-2xl font-bold mb-10">
          AIcruiter
        </h1>

        <div className="space-y-6 text-gray-600">

          <div className="font-semibold text-blue-600">
            Dashboard
          </div>

          <div>Scheduled Interview</div>
          <div>All Interview</div>
          <div>Billing</div>
          <div>Settings</div>

        </div>

        {/* CREATE INTERVIEW BUTTON */}

        <button
          onClick={() => nav("/create")}
          className="mt-10 bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
        >
          + Create New Interview
        </button>

        {/* LOGOUT */}

        <button
          onClick={logout}
          className="mt-4 border px-4 py-2 rounded-lg w-full"
        >
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}

      <div className="p-10 w-full">

        {/* WELCOME */}

        <div className="bg-white p-6 rounded-xl shadow mb-8">

          <h2 className="text-xl font-bold">
            Welcome Back!
          </h2>

          <p className="text-gray-500">
            AI-Driven Interviews, Hassle-Free Hiring
          </p>

        </div>

        {/* ACTION CARDS */}

        <div className="grid grid-cols-2 gap-6 mb-10">

          <div
            onClick={() => nav("/create")}
            className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg"
          >
            <h3 className="font-semibold mb-2">
              Create New Interview
            </h3>

            Create AI interviews and schedule them with candidates
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Create Phone Screening Call
            </h3>

            Schedule phone screening calls with candidates
          </div>

        </div>

        {/* PREVIOUS INTERVIEWS */}

        <h2 className="text-xl font-bold mb-4">
          Previously Created Interviews
        </h2>

        <div className="bg-white p-6 rounded-xl shadow w-96">

          <div className="flex justify-between items-center">

            <div>

              <h3 className="font-semibold">
                Full Stack React Developer
              </h3>

              <p className="text-gray-500">
                15 Min
              </p>

            </div>

            <div className="w-4 h-4 bg-blue-600 rounded-full" />

          </div>

          <div className="flex gap-4 mt-6">

            <button className="border px-4 py-2 rounded">
              Copy Link
            </button>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Send
            </button>

          </div>

          <p className="text-sm text-gray-400 mt-4">
            07 Apr 2025
          </p>

        </div>

      </div>
    </div>
  );
}