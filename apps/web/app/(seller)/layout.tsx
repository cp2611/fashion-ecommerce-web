export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Seller Area</h2>
      {children}
    </section>
  );
}
