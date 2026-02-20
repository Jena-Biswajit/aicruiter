// import { useNavigate } from "react-router-dom";

// export default function Landing() {
//   const nav = useNavigate();

//   const goDashboard = () => {
//     const isLoggedIn = localStorage.getItem("auth");

//     if (isLoggedIn) nav("/dashboard");
//     else nav("/login");
//   };

//   return (
//     <div className="bg-[#f8fafc] min-h-screen">

//       {/* NAVBAR */}

//       <nav className="flex justify-between px-10 py-6 bg-white shadow-sm">

//         <h1 className="text-2xl font-bold">
//           AIcruiter
//         </h1>

//         <button
//           onClick={goDashboard}
//           className="bg-blue-600 text-white px-5 py-2 rounded-lg"
//         >
//           Dashboard
//         </button>
//       </nav>

//       {/* HERO */}

//       <div className="flex items-center justify-between px-16 mt-20">

//         <div className="max-w-xl">

//           <h2 className="text-5xl font-bold">
//             AI-Powered Interview Assistant
//           </h2>

//           <p className="text-gray-600 mt-6">
//             Let AI conduct interviews while you focus on hiring.
//           </p>

//           <button
//             onClick={goDashboard}
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-8"
//           >
//             Create Interview →
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

  // ⭐ AUTH CHECK
  const goDashboard = () => {
    const isLoggedIn = localStorage.getItem("auth");

    if (isLoggedIn) nav("/dashboard");
    else nav("/login");
  };

  return (
    <div className="bg-[var(--bg-light)] min-h-screen">

      {/* NAVBAR */}

      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-sm">

        <h1 className="text-2xl font-bold text-[var(--text-dark)]">
          AIcruiter
        </h1>

        <div className="flex gap-8 text-[var(--text-gray)]">
          <span>Features</span>
          <span>How it Works</span>
          <span>Pricing</span>
        </div>

        {/* ⭐ CHANGED ONLY THIS */}
        <button
          onClick={goDashboard}
          className="bg-[var(--primary)] text-white px-5 py-2 rounded-lg"
        >
          Dashboard
        </button>
      </nav>

      {/* HERO SECTION */}

      <div className="flex items-center justify-between px-16 mt-20">

        {/* LEFT TEXT */}

        <div className="max-w-xl">

          <h2 className="text-5xl font-bold leading-tight text-[var(--text-dark)]">

            AI-Powered Interview{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient)" }}
            >
              Assistant
            </span>{" "}
            for Modern Recruiters
          </h2>

          <p className="text-[var(--text-gray)] mt-6">
            Let our AI voice agent conduct candidate interviews while you focus
            on finding the perfect match.
          </p>

          <div className="flex gap-4 mt-8">

            {/* ⭐ CHANGED ONLY THIS */}
            <button
              onClick={goDashboard}
              className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg"
            >
              Create Interview →
            </button>

            <button className="border px-6 py-3 rounded-lg text-[var(--text-dark)]">
              Watch Demo
            </button>

          </div>

        </div>

        {/* RIGHT DASHBOARD PREVIEW */}

        <div className="bg-white p-6 rounded-xl shadow-lg w-[420px]">

          <div className="bg-gray-100 p-6 rounded-lg text-center">

            <div className="text-5xl mb-4">▶️</div>

            <p className="text-[var(--text-gray)]">
              Dashboard Preview
            </p>

          </div>

        </div>

      </div>

      {/* HOW IT WORKS */}

      <div className="mt-32 text-center">

        <h2 className="text-3xl font-bold text-[var(--text-dark)]">
          How AIcruiter Works
        </h2>

        <p className="text-[var(--text-gray)] mt-2">
          Three simple steps to transform your recruitment process
        </p>

        <div className="flex justify-center gap-8 mt-12">

          <div className="bg-white p-6 rounded-xl shadow w-72">
            <h3 className="font-semibold mb-2">
              Save Time
            </h3>
            Automate screening interviews
          </div>

          <div className="bg-white p-6 rounded-xl shadow w-72">
            <h3 className="font-semibold mb-2">
              Data-Driven Insights
            </h3>
            Get accurate comparisons
          </div>

          <div className="bg-white p-6 rounded-xl shadow w-72">
            <h3 className="font-semibold mb-2">
              Reduce Bias
            </h3>
            Structured evaluation
          </div>

        </div>

      </div>

    </div>
  );
}

// import { useNavigate } from "react-router-dom";

// export default function Landing() {
//   const nav = useNavigate();

//   return (
//     <div className="bg-[var(--bg-light)] min-h-screen">

//       {/* NAVBAR */}

//       <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-sm">

//         <h1 className="text-2xl font-bold text-[var(--text-dark)]">
//           AIcruiter
//         </h1>

//         <div className="flex gap-8 text-[var(--text-gray)]">
//           <span>Features</span>
//           <span>How it Works</span>
//           <span>Pricing</span>
//         </div>

//         {/* ⭐ Goes to dashboard → ProtectedRoute will redirect to login if needed */}
//         <button
//           onClick={() => nav("/dashboard")}
//           className="bg-[var(--primary)] text-white px-5 py-2 rounded-lg"
//         >
//           Dashboard
//         </button>
//       </nav>

//       {/* HERO SECTION */}

//       <div className="flex items-center justify-between px-16 mt-20">

//         {/* LEFT TEXT */}

//         <div className="max-w-xl">

//           <h2 className="text-5xl font-bold leading-tight text-[var(--text-dark)]">

//             AI-Powered Interview{" "}
//             <span
//               className="bg-clip-text text-transparent"
//               style={{ backgroundImage: "var(--gradient)" }}
//             >
//               Assistant
//             </span>{" "}
//             for Modern Recruiters
//           </h2>

//           <p className="text-[var(--text-gray)] mt-6">
//             Let our AI voice agent conduct candidate interviews while you focus
//             on finding the perfect match.
//           </p>

//           <div className="flex gap-4 mt-8">

//             {/* ⭐ Same behavior */}
//             <button
//               onClick={() => nav("/dashboard")}
//               className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg"
//             >
//               Create Interview →
//             </button>

//             <button className="border px-6 py-3 rounded-lg text-[var(--text-dark)]">
//               Watch Demo
//             </button>

//           </div>

//         </div>

//         {/* RIGHT DASHBOARD PREVIEW */}

//         <div className="bg-white p-6 rounded-xl shadow-lg w-[420px]">

//           <div className="bg-gray-100 p-6 rounded-lg text-center">

//             <div className="text-5xl mb-4">▶️</div>

//             <p className="text-[var(--text-gray)]">
//               Dashboard Preview
//             </p>

//           </div>

//         </div>

//       </div>

//       {/* HOW IT WORKS */}

//       <div className="mt-32 text-center">

//         <h2 className="text-3xl font-bold text-[var(--text-dark)]">
//           How AIcruiter Works
//         </h2>

//         <p className="text-[var(--text-gray)] mt-2">
//           Three simple steps to transform your recruitment process
//         </p>

//         <div className="flex justify-center gap-8 mt-12">

//           <div className="bg-white p-6 rounded-xl shadow w-72">
//             <h3 className="font-semibold mb-2">
//               Save Time
//             </h3>
//             Automate screening interviews
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow w-72">
//             <h3 className="font-semibold mb-2">
//               Data-Driven Insights
//             </h3>
//             Get accurate comparisons
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow w-72">
//             <h3 className="font-semibold mb-2">
//               Reduce Bias
//             </h3>
//             Structured evaluation
//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }
