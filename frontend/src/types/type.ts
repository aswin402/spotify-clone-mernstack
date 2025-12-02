export interface Album{
	_id:string,
	title:string,
    artist:string,
	imageUrl:string,
    songs:any[],
    releaseDate:string
}

export interface Song{
	_id:string,
	title:string,
    artist:string,
    albumId:string,
	audioUrl:string,
	duration:number,
    imageUrl:string,
    createdAt:string,
    updatedAt:string
}


export interface Stats {
	totalSongs: number;
	totalAlbums: number;
	totalUsers: number;
	totalArtists: number;
}

export interface Message {
	_id: string;
	senderId: string;
	receiverId: string;
	content: string;
	createdAt: string;
	updatedAt: string;
}

export interface User {
	_id: string;
	clerkId: string;
	fullName: string;
	imageUrl: string;
}