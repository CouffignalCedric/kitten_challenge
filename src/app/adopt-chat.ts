export class AdoptChat {
    name: string;
    race: string;
    date: Date;
    photo:string;

    constructor(
         name: string,
         race: string,
         date: Date,
         photo:string
        
    ) {
        this.name=name;
        this.race=race;
        this.date=date;
        this.photo=photo;

    }
}