import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RootStyleRegistry from "../RootStyleRegistry";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <Sidebar />
    
      <RootStyleRegistry>{children}</RootStyleRegistry>
    </section>
  );
}