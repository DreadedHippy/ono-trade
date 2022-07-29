import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name = localStorage.getItem('name');
  email = localStorage.getItem('email')
  isEditMode = false;
  profilePicSrc = environment.staticUrl + localStorage.getItem('imageSrc');
  fileInput = document.getElementById('input') as HTMLInputElement;


  constructor(private router: Router, private authSrv: AuthService, private alertSrv: AlertService) { }

  dashboardPage(){
	  this.router.navigate(['dashboard'])
  }

  notificationsPage(){
    this.router.navigate(['notifications'])
  }

  async uploadImg(event){
    let file = event.target.files[0];
    if(!file){
      this.alertSrv.toast('No image was uploaded', 2000);
      return
    }
    const formData = new FormData()
    console.log(file)
    const email = localStorage.getItem('email')
    // Store form name as "image" with file data
    let extension = file.name.substring(file.name.lastIndexOf('.')); //Get file extension
    console.log(extension)
    formData.append("image", file, email + extension);
    let cookieString: string = email + extension

    console.log(file.name, file, formData);

    await this.authSrv.uploadImg(formData, cookieString).subscribe((response: {message: string}) => {
      console.log('Response is:', response);
      this.alertSrv.toast(response.message, 2000)
      this.profilePicSrc = environment.staticUrl + localStorage.getItem('imageSrc')
      window.location.reload();
    })
  }

  ngOnInit(){}



  toggleEdit(){
    this.isEditMode = !this.isEditMode
  }

  isEditable(){
    return new Promise (resolve => {
      resolve(this.isEditMode)
    })
  }


}
