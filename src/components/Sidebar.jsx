import {
  LayoutDashboard,
  Calendar,
  List,
  Settings,
  CreditCard
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r p-6">

      <h1 className="text-2xl font-bold mb-10">
        AIcruiter
      </h1>

      <nav className="space-y-5 text-gray-600">

        <div className="flex gap-3">
          <LayoutDashboard size={18} /> Dashboard
        </div>

        <div className="flex gap-3">
          <Calendar size={18} /> Scheduled Interview
        </div>

        <div className="flex gap-3">
          <List size={18} /> All Interview
        </div>

        <div className="flex gap-3">
          <CreditCard size={18} /> Billing
        </div>

        <div className="flex gap-3">
          <Settings size={18} /> Settings
        </div>

      </nav>

      <button className="mt-10 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
        + Create New Interview
      </button>

    </div>
  );
}
