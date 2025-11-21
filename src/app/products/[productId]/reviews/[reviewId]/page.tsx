import { notFound } from "next/navigation";

export default async function review( { params } : {params : Promise<{reviewId : string, productId : string}>}) {
    const {reviewId, productId} = await params;
    // products/1/reviews/2

    if(parseInt(reviewId) > 1000){
        notFound();
    }      
    console.log("hello in reviewId");                 
    
    return (
        <div>
            <h1>product id is {productId} and review id is {reviewId}</h1>
        </div>
    )
}