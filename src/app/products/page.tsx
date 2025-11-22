import Link from "next/link";

export default function Products(){
    const productId = 100;
    return(
        <div>
            <Link href="/">home</Link>
            <h1>products details</h1>
            <h2>
                <Link href={`/products/${productId}`}>product {productId}</Link>
            </h2>
        </div>
    )
}