export class Reservation{
    first_name: string;
    last_name: string;
    dateFrom: Date;
    dateTo: Date;
    price: number;
    _id: number;

    constructor(obj?:any){
        // this.first_name = obj && obj.first_name || '';
        // this.last_name = obj && obj.last_name || '';
        // this.dateFrom = obj && obj.dateFrom || '';
        // this.dateTo = obj && obj.dateTo || '';
    }
}