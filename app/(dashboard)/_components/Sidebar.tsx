import SidebarRoutes from "./SidebarRoutes";

const SideBar = () => {
  return (
    <div className="h-full border-r flex flex-col bg-white shadow-sm overflow-y-auto">
      <div className="p-6">
        <p className="text-2xl font-bold">Qemer</p>
      </div>

      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default SideBar;
