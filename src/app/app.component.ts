import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,NavbarComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  Title : string = "This is dynamic";
  dynamic : number = 123 ;
  imgURL : string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  isDisabled : boolean =true;

  isActive: boolean = false;

  isOn :boolean = false;

  buttonClick() {
    console.log('Button Click');
  }

  ButtonClick() {
    console.log('Button clicked');
  }
  keyenter(event:any){
    console.log(event.keyCode);
    if (event.keyCode == 13){
      console.log('Enter key is pressed');
    }
    else{
      console.log('pressed some other key');
    } 
  }

  keyupFiltering(user:HTMLInputElement){
    console.log(user.value);
  }

  userName : string = "Vikas";

  updateUserName(username:HTMLInputElement) {
    this.userName = username.value;
    console.log(this.userName);
    
  }


}
