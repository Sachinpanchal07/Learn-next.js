import { Metadata } from "next"
type props = {
    params : Promise<{productId : string}>;
};

export const generateMetadata = async( { params } : props ) : Promise<Metadata> => {
    const id = (await params).productId; // () used b/z dot operator has higher precedence the ()
    const title = await new Promise((resolve) => {
        setTimeout(()=>{
            resolve(`iphone ${id}`)
        }, 100)
    })

    return {
        title : `product ${title}`
    }
}

export default async function ProductDetails({ params }: {params : Promise<{productId: number }>}) {
  const {productId} = await params; 
  console.log(typeof productId, "i'm in product details")

  return (
    <div>
      <h1>This is product info: {productId}</h1>
    </div>
  );
}
