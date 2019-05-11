import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }  

ngOnInit() {  
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(){
  if(this.userForm.valid){
    alert('User form is valid!!')
  } else {
    alert('User form is not valid!!')
  }
}

}