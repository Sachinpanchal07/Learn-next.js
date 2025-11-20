export default async function review( { params } : {params : Promise<{reviewId : number, productId : number}>}) {
    const {reviewId, productId} = await params;

    return (
        <div>
            <h1>product id is {productId} and review id is {reviewId}</h1>
        </div>
    )
}