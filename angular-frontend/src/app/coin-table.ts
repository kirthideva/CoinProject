export class CoinTable {
    id : number;
    name : string;
    coins : number;

    get(val : string){
        if(val == 'name')
            return this.name;
        if(val == 'coins')
            return this.coins;
    }
}
