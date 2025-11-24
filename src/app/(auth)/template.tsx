"use client";

import Link from "next/link";
import { useState } from "react";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const [input, setInput] = useState("");
  return (
    <>
        <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <br />
        <Link href="/register">register </Link>
        <Link href="/login">login </Link>
        <Link href="/forgot-password">forgot-password</Link>
        {children}
    </>
  )
  
}
