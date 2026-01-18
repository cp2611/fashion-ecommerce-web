export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>Fashion Store</h2>
        </header>

        {children}

        <footer>
          <p>© Fashion Store</p>
        </footer>
      </body>
    </html>
  );
}
