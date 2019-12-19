export declare class Track {
    name: string;
    artist: string;
    url: string;
    cover: string;
}
export declare class PlayerService {
    current: number;
    playlist: Track[];
    random(): Track;
    next(): Track;
    prev(): Track;
    private getNextTrack;
    private getPrevTrack;
}
