import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

 
  Data:any=[]

  constructor() { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){

    axios.get(`https://deependra-009.github.io/db.json`).then(
      (data)=>{
        console.log(data.data.mobile);
        this.Data=data.data.mobile;
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
    
  }



}
