"use client";
import Login from "./Login";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const router = useRouter();
  //console.log(router)
  return (
    <div className="flex justify-center items-center h-screen">
      {!showLoginPage && (
        <button onClick={setShowLoginPage(true)}>Login</button>
      )}
      {showLoginPage && <Login />}
    </div>
  );
}
