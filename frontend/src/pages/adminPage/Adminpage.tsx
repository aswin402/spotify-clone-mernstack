import { useState } from "react";
import AlbumsTabContent from "@/components/AlbumsTabContent";
import DashboardStats from "@/components/DashboardStats";
import Header from "@/components/Header";
import SongsTabContent from "@/components/SongsTabContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function AdminPage() {
    const [activeTab, setActiveTab] = useState("songs");

    return ( 
        <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto">
                <div className="p-8">
                    <Header />
                    <DashboardStats />
                    
                    <div className="mt-8">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid w-full max-w-md grid-cols-2 bg-zinc-800/50 border border-zinc-700/50 mb-6">
                                <TabsTrigger value="songs" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">
                                    Songs
                                </TabsTrigger>
                                <TabsTrigger value="albums" className="data-[state=active]:bg-violet-500/20 data-[state=active]:text-violet-400">
                                    Albums
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="songs" className="mt-6">
                                <SongsTabContent />
                            </TabsContent>

                            <TabsContent value="albums" className="mt-6">
                                <AlbumsTabContent />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AdminPage;