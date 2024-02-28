import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule , FormInputComponent],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {

  updateUserFrom = new FormGroup({
    username : new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required,Validators.minLength(5)])
  })


  onSubmit(event:Event){
    event.preventDefault()
    if(this.updateUserFrom.invalid){
      console.log("error");
      this.updateUserFrom.markAllAsTouched()
      return
    }
    console.log(this.updateUserFrom.value);
    

  }

}
