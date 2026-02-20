import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  const login = () => {
    localStorage.setItem("auth", "true");
    nav("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">

      <div className="bg-white p-10 rounded-xl shadow w-[420px] text-center">

        <img
          src="https://cdn-icons-png.flaticon.com/512/1995/1995470.png"
          alt="AIcruiter"
          className="w-32 mx-auto mb-6"
        />

        <h2 className="text-2xl font-bold mb-2">
          Welcome to AIcruiter
        </h2>

        <p className="text-gray-500 mb-6">
          Sign in with Google Authentication
        </p>

        <button
          onClick={login}
          className="bg-blue-600 text-white w-full py-3 rounded-lg"
        >
          Login with Google
        </button>

      </div>
    </div>
  );
}

// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const nav = useNavigate();

//   const login = () => {
//     localStorage.setItem("auth", "true");
//     nav("/dashboard");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
//       <button
//         onClick={login}
//         className="bg-blue-600 text-white px-6 py-3 rounded-lg"
//       >
//         Login with Google
//       </button>
//     </div>
//   );
// }
