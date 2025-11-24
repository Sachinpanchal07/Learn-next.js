"use client";

import {useRouter, redirect} from "next/navigation";
export default function OrderProduct() {

    const router = useRouter();
    const handleClick = () => {
        console.log("Order is placed");
        // all router methods have diff functioning.
        // router.push("/");
        // router.back();
        // router.replace("/")
        redirect("/");
    }

    return (
        <>
            <h1>Place the order</h1>
            <button onClick={handleClick}>Order</button>
        </>
    )
}