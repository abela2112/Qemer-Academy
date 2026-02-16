"use client";

import { useState } from "react";
import { User, Shield, Bell, Palette, BookOpen, GraduationCap, Lock, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

// Mock Switch Component since it's missing from ui/
const Switch = ({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: (checked: boolean) => void }) => (
  <button
    role="switch"
    aria-checked={checked}
    onClick={() => onCheckedChange(!checked)}
    className={cn(
      "w-11 h-6 rounded-full relative transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
      checked ? "bg-sky-600" : "bg-slate-200"
    )}
  >
    <span
      className={cn(
        "block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out mt-0.5 ml-0.5",
        checked ? "translate-x-5" : "translate-x-0"
      )}
    />
  </button>
);

interface SettingsClientProps {
  initialRole?: "student" | "instructor" | "admin";
}

export const SettingsClient = ({ initialRole = "instructor" }: SettingsClientProps) => {
  const [activeTab, setActiveTab] = useState("profile");
  const [role] = useState(initialRole); // In a real app, this comes from auth context/hook

  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "learning", label: "Learning Preferences", icon: BookOpen },
    ...(role === "instructor" ? [{ id: "instructor", label: "Instructor Settings", icon: GraduationCap }] : []),
    ...(role === "admin" ? [{ id: "admin", label: "Admin Settings", icon: Lock }] : []),
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSection />;
      case "security":
        return <SecuritySection />;
      case "notifications":
        return <NotificationsSection />;
      case "appearance":
        return <AppearanceSection />;
      case "learning":
        return <LearningPreferencesSection />;
      case "instructor":
        return <InstructorSettingsSection />;
      case "admin":
        return <AdminSettingsSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full w-full gap-6 p-6 bg-slate-50 min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0 space-y-2">
        <div className="mb-6 px-2">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Settings</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your account preferences</p>
        </div>
        
        <nav className="flex flex-col space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out",
                  activeTab === item.id
                    ? "bg-white text-sky-700 shadow-sm ring-1 ring-slate-200"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <Icon className={cn("w-5 h-5", activeTab === item.id ? "text-sky-600" : "text-slate-400")} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Content Panel */}
      <main className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
           {renderContent()}
        </div>
      </main>
    </div>
  );
};

// --- Section Components ---

const ProfileSection = () => (
    <div className="space-y-6">
        <Card className="border-slate-200 shadow-sm">
            <CardHeader>
                <CardTitle>Public Profile</CardTitle>
                <CardDescription>This is how others will see you on the site.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                    <div className="h-24 w-24 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-slate-400 overflow-hidden">
                         <User className="h-12 w-12" />
                         {/* Image component would go here */}
                    </div>
                    <div className="space-y-2">
                         <Button variant="outline" size="sm">Change Avatar</Button>
                         <p className="text-xs text-slate-500">JPG, GIF or PNG. 1MB max.</p>
                    </div>
                </div>
                <Separator />
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" defaultValue="Kiduy" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="kiduy_dev" />
                    </div>
                </div>
                 <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea id="bio" placeholder="Tell us a little bit about yourself" className="resize-none h-32" />
                        <p className="text-xs text-slate-500">Brief description for your profile. URLs are hyperlinked.</p>
                 </div>
                 <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                         {/* Mock Select */}
                         <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50">
                            kiduy@example.com
                         </div>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                 </div>
                 
                 <div className="flex justify-end pt-4">
                     <Button className="bg-sky-700 hover:bg-sky-800">Save Changes</Button>
                 </div>
            </CardContent>
        </Card>
    </div>
);

const SecuritySection = () => {
    const [twoFactor, setTwoFactor] = useState(false);
    return (
        <div className="space-y-6">
            <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password to keep your account secure.</CardDescription>
                </CardHeader>
                 <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <Label htmlFor="current">Current Password</Label>
                        <Input id="current" type="password" />
                     </div>
                      <div className="space-y-2">
                        <Label htmlFor="new">New Password</Label>
                        <Input id="new" type="password" />
                     </div>
                      <div className="flex justify-end">
                       <Button variant="outline">Update Password</Button>
                     </div>
                 </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <div className="space-y-1">
                        <CardTitle className="text-base">Two-factor Authentication</CardTitle>
                        <CardDescription>Add an extra layer of security to your account.</CardDescription>
                     </div>
                     <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
                 </CardHeader>
            </Card>

            <Card className="border-red-100 bg-red-50/50 shadow-sm">
                 <CardHeader>
                    <CardTitle className="text-red-600">Danger Zone</CardTitle>
                    <CardDescription className="text-red-600/80">Irreversible and destructive actions.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="flex items-center justify-between">
                         <div className="space-y-1">
                             <p className="font-medium text-red-900">Delete Account</p>
                             <p className="text-sm text-red-700/80">Permanently remove your Personal data.</p>
                         </div>
                         <Button variant="destructive" size="sm">Delete Account</Button>
                     </div>
                </CardContent>
            </Card>
        </div>
    );
}

const NotificationsSection = () => {
    const [emailNotifs, setEmailNotifs] = useState(true);
    const [marketing, setMarketing] = useState(false);
    
    return (
        <Card className="border-slate-200 shadow-sm">
             <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Choose what you want to be notified about.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <div className="flex items-start space-x-4">
                     <Bell className="mt-1 h-5 w-5 text-slate-500" />
                     <div className="space-y-4 w-full">
                         <div className="flex items-center justify-between">
                             <div className="space-y-0.5">
                                 <Label className="text-base">Communication emails</Label>
                                 <p className="text-sm text-slate-500">Receive emails about your account activity.</p>
                             </div>
                             <Switch checked={emailNotifs} onCheckedChange={setEmailNotifs} />
                         </div>
                         <Separator />
                         <div className="flex items-center justify-between">
                             <div className="space-y-0.5">
                                 <Label className="text-base">Marketing emails</Label>
                                 <p className="text-sm text-slate-500">Receive emails about new products, features, and more.</p>
                             </div>
                             <Switch checked={marketing} onCheckedChange={setMarketing} />
                         </div>
                     </div>
                 </div>
            </CardContent>
        </Card>
    );
};

const AppearanceSection = () => (
     <Card className="border-slate-200 shadow-sm">
             <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize the interface look and feel.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <div className="space-y-2">
                     <Label>Theme</Label>
                     <div className="flex items-center gap-4">
                         <div className="h-24 w-40 rounded-lg border-2 border-slate-900 bg-slate-900 p-2 shadow-sm cursor-pointer">
                             <div className="h-full w-full rounded bg-slate-800" />
                         </div>
                          <div className="h-24 w-40 rounded-lg border-2 border-slate-200 bg-white p-2 shadow-sm cursor-pointer">
                             <div className="h-full w-full rounded bg-slate-100" />
                         </div>
                     </div>
                     <p className="text-xs text-slate-500 pt-2">Select your preferred theme.</p>
                 </div>
            </CardContent>
     </Card>
);

const LearningPreferencesSection = () => (
    <Card className="border-slate-200 shadow-sm">
        <CardHeader>
            <CardTitle>Learning Environment</CardTitle>
            <CardDescription>Customize your learning experience.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                    <Label className="text-base">Autoplay Videos</Label>
                    <p className="text-sm text-slate-500">Automatically play the next lesson video.</p>
                </div>
                 <Switch checked={true} onCheckedChange={() => {}} />
            </div>
             <Separator />
              <div className="space-y-2">
                <Label>Language</Label>
                 <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>English (United States)</option>
                    <option>Spanish</option>
                    <option>French</option>
                 </select>
             </div>
        </CardContent>
    </Card>
);

const InstructorSettingsSection = () => (
    <Card className="border-slate-200 shadow-sm">
        <CardHeader>
            <CardTitle>Instructor Profile</CardTitle>
            <CardDescription>Manage your public instructor profile.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
             <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                    <Label className="text-base">Public Profile</Label>
                    <p className="text-sm text-slate-500">Make your profile visible to students.</p>
                </div>
                 <Switch checked={true} onCheckedChange={() => {}} />
            </div>
            <Separator />
            <div className="space-y-4">
                 <Label>Social Links</Label>
                 <div className="grid gap-4">
                     <div className="flex items-center gap-2">
                         <span className="text-sm font-medium w-20">Website</span>
                         <Input placeholder="https://your-site.com" />
                     </div>
                      <div className="flex items-center gap-2">
                         <span className="text-sm font-medium w-20">Twitter</span>
                         <Input placeholder="@username" />
                     </div>
                      <div className="flex items-center gap-2">
                         <span className="text-sm font-medium w-20">LinkedIn</span>
                         <Input placeholder="/in/username" />
                     </div>
                 </div>
            </div>
        </CardContent>
    </Card>
);

const AdminSettingsSection = () => (
    <div className="space-y-6">
        <Card className="border-slate-200 shadow-sm">
            <CardHeader>
                <CardTitle>Platform Management</CardTitle>
                <CardDescription>Admin controls and configuration.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label className="text-base">Maintenance Mode</Label>
                        <p className="text-sm text-slate-500">Disable platform access for students.</p>
                    </div>
                     <Switch checked={false} onCheckedChange={() => {}} />
                </div>
            </CardContent>
        </Card>
    </div>
);
