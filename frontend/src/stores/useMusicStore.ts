import { axiosInstance } from '@/lib/axios';
import type { Album, Song } from '@/types/type';
import { create } from 'zustand';

interface MusicState {
  albums: Album[];
  songs: Song[];
  isLoading:boolean;
  error:string|null;
  currentAlbum: Album | null;

  fetchAlbums: () => Promise<void>; 
  fetchAlbumById: (id:string)=>Promise<void>;
}

export const useMusicStore = create<MusicState>((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null, 
  currentAlbum: null,

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
  },


  fetchAlbumById: async (id) => {
     set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get(`/albums/${id}`);
       set({ currentAlbum: response.data});
    } catch (error:any) {
      set({ error:error.response.data.message });
    }finally{
        set({isLoading:false})
    }
  }
}));