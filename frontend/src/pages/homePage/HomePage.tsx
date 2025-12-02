import FeaturedSection from '@/components/FeaturedSection';
import Topbar from '../../components/Topbar';
import { useMusicStore } from '@/stores/useMusicStore';
import { useEffect } from 'react';

const HomePage = () => { 
    const {
        fetchFeaturedSongs,
        fetchMadeForYouSongs,
        fetchTrendingSongs,
        isLoading,
        featuredSongs,
        madeForYouSongs,
        trendingSongs,
    } = useMusicStore();

useEffect(() => {
        fetchFeaturedSongs();
        fetchMadeForYouSongs();
        fetchTrendingSongs();
    }, [fetchFeaturedSongs, fetchMadeForYouSongs,fetchTrendingSongs]);


    return (
        <div className="rounded-md overflow-hidden">
            <Topbar />
            <FeaturedSection />
        </div>
    );
};
export default HomePage;