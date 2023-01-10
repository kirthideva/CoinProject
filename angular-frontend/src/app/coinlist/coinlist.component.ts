import { Component, OnInit } from '@angular/core';
import { CoinServiceService } from '../coin-service.service';
import { CoinTable } from '../coin-table';

@Component({
  selector: 'app-coinlist',
  templateUrl: './coinlist.component.html',
  styleUrls: ['./coinlist.component.css']
})
export class CoinlistComponent implements OnInit {

   coinList:CoinTable[]
  constructor(private coinService: CoinServiceService) { }

  ngOnInit(): void {
    this.getCoinList();
  }

  getCoinList(){
    this.coinService.getCoinList().subscribe(data=>{
      console.log(data);
    this.coinList=data;
    });
  }
}
