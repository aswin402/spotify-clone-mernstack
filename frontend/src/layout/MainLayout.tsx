import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Outlet } from "react-router-dom";
import LeftSidebar from '../components/LeftSidebar';
import AudioPlayer from "@/components/AudioPlayer";
function MainLayout() {
    const isMobile = false;
    return ( 
        <div className="h-screen bg-black text-white flex flex-col">

<ResizablePanelGroup direction="horizontal" className="flex h-full flex-1 overflow-hidden p-2">
    <AudioPlayer />
    {/* LeftBar ==========================================*/}
    <ResizablePanel defaultSize={20} minSize={isMobile ? 0: 10} maxSize={30} >
        <LeftSidebar />
    </ResizablePanel>
  
  <ResizableHandle className="w-2 bg-black rounded-l-lg transition-colors" />


    {/* MainContent ==========================================*/}
  <ResizablePanel defaultSize={isMobile ? 80: 60}>
        <Outlet />
    </ResizablePanel>

<ResizableHandle className="w-2 bg-black rounded-l-lg transition-colors" />


      {/* RightBar ==========================================*/}
  <ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
        <div>Right Panel</div>
    </ResizablePanel>


</ResizablePanelGroup> 

        </div>
     );
}

export default MainLayout;