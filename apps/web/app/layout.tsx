export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
  <nav>
  <a href="/">Home</a> |{" "}
  <a href="/products">Products</a> |{" "}
  <a href="/seller">Seller</a> |{" "}
  <a href="/admin/dashboard">Admin</a>
</nav>

</header>


        {children}

        <footer>
          <p>© Fashion Store</p>
        </footer>
      </body>
    </html>
  );
}
