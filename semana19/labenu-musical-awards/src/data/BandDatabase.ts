import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {
    protected TABLE_NAME :string = "LAMA_Bands";

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
        })
        .into(this.TABLE_NAME)
    }

    public async getBandById(
        bandId: string
    ): Promise<Band> {
        const result = await this.getConnection()
            .select("*")
            .from(this.TABLE_NAME)
            .where({id: bandId});

        return Band.toBandModel(result[0]);
    }

    public async getBandByName(
        name:string
    ): Promise<Band[]> {
        const result = await this.getConnection()
            .select("*")
            .from(this.TABLE_NAME)
            .where({name: name});

        const bands :Band[] = [];

        for(let band of result) {
            bands.push(Band.toBandModel(band));
        }

        return bands;
    }
};