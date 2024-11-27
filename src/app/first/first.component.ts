import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})

export class FirstComponent {
         
     hero ={
      image:'assets/imagek.jpg',
      name:'killua zoldyck', 
      power:50,
      description : 'Killua is introduced as a character who seems similar to Gon; cheeky, cheerful, and full of mischievous ideas. He is also one of the most quick-thinking characters in the series. He is confident in his own abilities, often being humble about it.'
     }

     data={
      image:'',
      name:'',
      power:0,
      description:''

     }


     change(){
       this.hero =this.data;
       this.data={
        image:'',
        name:'',
        power:0,
        description:'' 
       }

     }
}
