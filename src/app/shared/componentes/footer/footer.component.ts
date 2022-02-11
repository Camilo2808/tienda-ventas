import { Component } from "@angular/core";
import { FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl:'./footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  emailCampo: FormControl;

  constructor() {
    this.emailCampo = new FormControl('', [ 
      Validators.required,
      Validators.email,
      /*
      Validators.minLength(4),
      Validators.maxLength(10)
      */
    ]);


  }
  enviarEmail(){
    if(this.emailCampo.valid){
      console.log(this.emailCampo.value);
    }
  }
}

/*
this.emailCampo.valueChanges
.subscribe(value => {
  console.log(value);
});*/