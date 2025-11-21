export const metadata = {
  title: "My Next App",
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
