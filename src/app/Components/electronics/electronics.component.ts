import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  Data:any=[]

  constructor() { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){

    axios.get(`https://deependra-009.github.io/db.json`).then(
      (data)=>{
        console.log(data.data.mobile);
        this.Data=data.data.electronics;
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
    
  }



}
