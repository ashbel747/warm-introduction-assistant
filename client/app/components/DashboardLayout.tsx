"use client";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const dashboardRoutes = ['/dashboard', '/investors', '/startups', '/create-startup', '/generate-intro', '/intro-queue', '/reminders', '/terms-of-service', '/settings', '/profile'];
  const showSidebar = dashboardRoutes.some(route => pathname?.startsWith(route));

  if (!showSidebar) {
    return <>{children}</>;
  }

  return (
<<<<<<< HEAD
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, minHeight: '100vh' }}>
        {children}
=======
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-h-screen w-full md:ml-0">
        <div className="p-4 md:p-6">
          {children}
        </div>
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
      </main>
    </div>
  );
}
