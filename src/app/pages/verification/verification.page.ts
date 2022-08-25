import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  verified = false

  constructor(
    public authSrv: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const key = this.route.snapshot.queryParamMap.get('key');
    console.log(key);
    this.authSrv.userverify(key).subscribe( data => {
      this.verified = true
    }, error => {
      console.log(error)
    })
  }


}
