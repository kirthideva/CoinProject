import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoinServiceService } from '../coin-service.service';
import { CoinTable } from '../coin-table';
import { FormGroup, FormControl, Validators, FormBuilder,ReactiveFormsModule } from 
'@angular/forms';

@Component({
  selector: 'app-create-coin',
  templateUrl: './create-coin.component.html',
  styleUrls: ['./create-coin.component.css']
})
export class CreateCoinComponent implements OnInit {

  coinObj : CoinTable = new CoinTable();
  requiredForm: FormGroup;

  constructor(private coinService:CoinServiceService, private router:Router,
    private fb: FormBuilder) { 
      this.coinForm();
    }

  ngOnInit(): void {
  }

  coinForm() {
    this.requiredForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,}')] ],
    coins: [1, [Validators.required,Validators.min(1)] ]
    });
 }

  addCoin(){
    this.coinService.addCoinList(this.coinObj).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/coinlist']);
    },error=>{this.router.navigate(['/coinlist']);});
  }
  onSubmit(){
    if((this.requiredForm.controls['name'].valid) && (this.requiredForm.controls['coins'].valid))
        this.addCoin();
  }

  get name() { return this.coinObj.get('name'); }

get coins() { return this.coinObj.get('coins'); }
}
