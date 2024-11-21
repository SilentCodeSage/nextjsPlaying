"use client";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logged In");
    router.push("/quote");
  };
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form className="w-80 flex flex-col space-y-4" onSubmit={handleLogin}>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"          
        >
          Login
        </button>
      </form>
    </main>
  );
}
