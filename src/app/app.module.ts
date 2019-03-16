import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { CryptoFormComponent } from './crypto-form/crypto-form.component';
import { CryptoService } from './crypto-service.service';
import { FormSubmittedComponent } from './form-submitted/form-submitted.component';
import { YesNoPipe } from './yes-no.pipe';

const routes = [
 { path: '', component: CryptoFormComponent },
 { path: 'submitted', component: FormSubmittedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CryptoFormComponent,
    FormSubmittedComponent,
    YesNoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
