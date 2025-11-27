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