export class Band{
    constructor(
        private id: string,
        private name: string,
        private music_genre: string,
        private responsible: string
    ){}

    public getId() :string {
        return this.id;
    }

    public getName() :string {
        return this.name;
    }

    public getMusicGenre() :string {
        return this.music_genre;
    }

    public getResponsible() :string {
        return this.responsible;
    }

    public setId(id: string) {
        this.id = id;
    }

    public setName(name:string) {
        this.name = name;
    }

    public setMusicGenre(music_genre: string) {
        this.music_genre = music_genre;
    }

    public setResponsible(responsible: string) {
        this.responsible = responsible;
    }
}

export interface BandInputDTO {
    name: string;
    music_genre: string;
    responsible: string;
}