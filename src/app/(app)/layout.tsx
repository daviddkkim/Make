import TopNavigation from "./components/TopNavigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TopNavigation />
      {children}
    </div>
  );
}
