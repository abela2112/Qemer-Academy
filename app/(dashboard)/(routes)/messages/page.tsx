import { Construction } from "lucide-react";

const MessagesPage = () => {
    return ( 
        <div className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
            <div className="bg-sky-100 p-4 rounded-full">
                <Construction className="w-10 h-10 text-sky-700" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-800">
                Messages
            </h2>
            <p className="text-muted-foreground max-w-sm">
                This feature is currently under development. We will implement the messaging system in a future update.
            </p>
        </div>
     );
}
 
export default MessagesPage;