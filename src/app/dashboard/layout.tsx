import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  const customStyles = {
    scrollbarWidth: 'none' as const, // Hide scrollbar in Firefox
    msOverflowStyle: 'none' as const, // Hide scrollbar in IE and Edge
    // overflow: 'auto' as const, // Hide scrollbar in Chrome, Safari and Opera
  }

  const customStylesChildren = {
    scrollbarWidth: 'none' as const, // Hide scrollbar in Firefox
    msOverflowStyle: 'none' as const, // Hide scrollbar in IE and Edge
    overflowX: 'auto' as const, // Hide scrollbar in Chrome, Safari and Opera
  }

  return (
    <div
      className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white"
      style={customStyles}
      >

      <div className="flex">

        <Sidebar />

        <div className="w-full text-slate-900" style={customStylesChildren}>
          {children}
        </div>

      </div>
    </div>
  );
}