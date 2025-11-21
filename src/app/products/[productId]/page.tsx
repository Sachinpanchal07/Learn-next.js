

export default async function ProductDetails({ params }: {params : Promise<{productId: number }>}) {
  const {productId} = await params; 
  console.log(typeof productId, "i'm in product details")

  return (
    <div>
      <h1>This is product info: {productId}</h1>
    </div>
  );
}
