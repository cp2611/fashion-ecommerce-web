export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Auth Area</h2>
      {children}
    </section>
  );
}
