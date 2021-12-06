import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 public ColorInput:any= FormGroup;
 public finalURL:any;
 public ResultData:any
  constructor(private fb: FormBuilder,private http:HttpClient) {}
  ngOnInit() {
    this.ColorInput = new FormGroup({
      Colorname: new FormControl(''),
     
    });
  }
  title = 'sivananthColor';

  onSubmit() {
   
    console.log('Message', this.ColorInput.value.Colorname);
    this.finalURL='https://api.color.pizza/v1/names/'+this.ColorInput.value.Colorname
    this.http.get<any>(this.finalURL).subscribe(data => {
      this.ResultData = data.colors;
      console.log(this.ResultData)
  }) 
  }
}
