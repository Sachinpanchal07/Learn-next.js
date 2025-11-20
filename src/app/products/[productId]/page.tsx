

export default async function ProductDetails({ params }: {params : Promise<{productId: number }>}) {
  const {productId} = await params; 

  return (
    <div>
      <h1>This is product info: {productId}</h1>
    </div>
  );
}
