
export const metadata = {
    title : {
        absolute : "This is fixed title"
    }
}

export default async function Blog(){
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Intentional Loading")
        }, 1000)
    })
    return(
        <div>
            <h1>blog</h1>
        </div>
    )
}