import AlbumsTabContent from "@/components/AlbumsTabContent";
import DashboardStats from "@/components/DashboardStats";
import Header from "@/components/Header";
import SongsTabContent from "@/components/SongsTabContent";

function AdminPage() {
    return ( 
        <>
        <Header />
        <DashboardStats />
        <AlbumsTabContent/>
        <SongsTabContent />
        </>
     );
}

export default AdminPage;