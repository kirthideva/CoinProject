import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoinTable } from './coin-table';

@Injectable({
  providedIn: 'root'
})
export class CoinServiceService {

  baseUrlForGet :string = "http://localhost:8080/api/coins";
  baseUrlForPost : string = "http://localhost:8080/api/coin";
  constructor(private httpClient : HttpClient) { }

  getCoinList() : Observable<CoinTable[]>{
    return this.httpClient.get<CoinTable[]>(`${this.baseUrlForGet}`);
  }

  addCoinList(coinObj : CoinTable) : Observable<Object>{
    return this.httpClient.post(`${this.baseUrlForPost}`, coinObj);
  }
}
