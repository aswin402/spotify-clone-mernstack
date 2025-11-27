import { axiosInstance } from '@/lib/axios';
import type { Album, Song } from '@/types/type';
import { create } from 'zustand';

interface MusicState {
  albums: Album[];
  songs: Song[];
  isLoading:boolean;
  error:string|null;

  fetchAlbums: () => Promise<void>; 
}

export const useMusicStore = create<MusicState>((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null,

  fetchAlbums: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await axiosInstance.get('/albums');
       set({ albums: response.data});
    } catch (error:any) {
      set({ error:error.response.data.message });
    }finally{
        set({isLoading:false})
    }
  }

}));