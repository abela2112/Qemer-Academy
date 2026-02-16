import { currentUser } from "@clerk/nextjs/server";

export const DashboardBanner = async () => {
  const user = await currentUser();
  return (
    <div className="bg-[#1F1F1F] rounded-xl p-6 mb-6 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
        <div className="z-10 relative">
            <h1 className="text-2xl font-bold mb-2">
                Hi 👋, {user?.firstName}!
            </h1>
            <p className="text-gray-300 text-sm">
                Good luck with your studies today!
            </p>
        </div>
        
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl"></div>
        <div className="absolute bottom-0 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
    </div>
  );
};
