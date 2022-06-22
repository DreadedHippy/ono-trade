import { Component, OnInit } from '@angular/core';
import { AuthService} from './services/auth.service'
import { TransactionsService } from './services/transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor( private authSrv: AuthService, private transSrv: TransactionsService) {}

  ngOnInit(){
    this.authSrv.autoAuthUser();
  }
}
