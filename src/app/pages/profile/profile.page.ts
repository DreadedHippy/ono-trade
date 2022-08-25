import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {

  name = localStorage.getItem('name');
  email = localStorage.getItem('email');
  subs = new SubSink()
  isEditMode = false;
  profilePicSrc = ''
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
    formData.append("image", file, email + extension); //Set file name to "user email" + "file extension"
    let cookieString: string = email + extension

    console.log(file.name, file, formData);

    await this.authSrv.uploadImg(formData, cookieString)
    .subscribe((response: {message: string}) => {
      // console.log('Response is:', response); //Debug
      this.alertSrv.toast(response.message + '. Refreshing...', 1000)
      this.profilePicSrc+='?rand=1398';
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, error => {
      console.log(error)
    })
  }

  ngOnInit(){
    this.profilePicSrc = environment.staticUrl + localStorage.getItem('imageSrc')
    this.subs.sink = this.authSrv.getImgUpdListener().subscribe((imgSrc: string) => {
      this.profilePicSrc = imgSrc
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }



  toggleEdit(){
    this.isEditMode = !this.isEditMode
  }

  isEditable(){
    return new Promise (resolve => {
      resolve(this.isEditMode)
    })
  }


}
