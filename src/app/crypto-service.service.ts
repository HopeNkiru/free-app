import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CryptoService {

  constructor(public http: HttpClient) { }

  getCryptos() {
    return this.http.get('https://coinmarketcap.com/api/');
     
    
   }
}
