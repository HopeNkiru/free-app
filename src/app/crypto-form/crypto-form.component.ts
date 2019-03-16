import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto-service.service';
@Component({
  selector: 'app-crypto-form',
  templateUrl: './crypto-form.component.html',
  styleUrls: ['./crypto-form.component.css']
})
export class CryptoFormComponent implements OnInit {
  top100Cryptos;

  cryptoSurvey = {
    name: '',
    favoriteCrypto: '',
    comments:''
  };

  todaysDate = new Date();

  constructor(public cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.getCryptos().subscribe((data) => {
      this.top100Cryptos = data;
      
    })
  }

  sendForm() {
    console.log(this.cryptoSurvey);
    
  }

}
