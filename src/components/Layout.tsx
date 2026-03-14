import { Outlet, Link, useLocation } from "react-router-dom";
import { Box, LayoutDashboard, FolderPlus, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export function Layout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/";

  if (isAuthPage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-zinc-200 bg-white flex-col">
        <div className="h-16 flex items-center px-6 border-b border-zinc-200">
          <Link to="/dashboard" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <Box className="w-5 h-5" />
            <span>ArchiConcept</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link
            to="/dashboard"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname === "/dashboard"
                ? "bg-zinc-100 text-zinc-900"
                : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            )}
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link
            to="/projects/new"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname.startsWith("/projects/new")
                ? "bg-zinc-100 text-zinc-900"
                : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            )}
          >
            <FolderPlus className="w-4 h-4" />
            New Project
          </Link>
        </nav>
        <div className="p-4 border-t border-zinc-200">
          <Link
            to="/login"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden h-16 flex items-center px-4 border-b border-zinc-200 bg-white">
          <Link to="/dashboard" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <Box className="w-5 h-5" />
            <span>ArchiConcept</span>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
