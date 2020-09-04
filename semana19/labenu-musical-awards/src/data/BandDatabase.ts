import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {
    protected TABLE_NAME :string = "Lama_Bands";

    private toModel(bbModel?: any): Band | undefined {
        return (
            bbModel &&
            new Band(
                bbModel.id,
                bbModel.name,
                bbModel.music_genre,
                bbModel.responsible
            )
        )
    }

    public async registerBand(
        id: string,
        name: string,
        music_genre: string,
        responsible: string
    ): Promise<void> {
        await this.getConnection()
            .insert({
                id,
                name,
                music_genre,
                responsible
            }).into(this.TABLE_NAME)
    }
}