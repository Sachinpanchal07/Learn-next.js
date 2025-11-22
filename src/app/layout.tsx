import {Metadata} from "next";


export const metadata : Metadata = { // static metadata
  title : {
    default : "This is defalt title used for component for which we did not defined metadata in their file",
    template : "%s | This line is permanent but %s replaces with metadata defined in specific file"
  },
  description: "Learning Next.js + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        <header style={{backgroundColor:"lightblue", textAlign:"center"}}>Header</header>
        {children}
        <footer style={{backgroundColor:"ghostwhite", textAlign:"center"}}>footer</footer>
      </body>
      
    </html>
  );
}
