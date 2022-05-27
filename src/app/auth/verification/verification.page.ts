import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const key = this.route.snapshot.queryParamMap.get('key');
    console.log(key);
    this.authService.userverify(key);
  }

}
