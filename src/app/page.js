"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Quote Generator</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Login to create and manage your customized quotes.
      </p>
      <button
        className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded hover:bg-green-600 transition"
        onClick={() => router.push("/login")}
      >
        Login
      </button>
    </main>
  );
}
