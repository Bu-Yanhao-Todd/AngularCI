import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit {
  
  firstName = '111';
  lastName = '22';

  constructor() { 
    this.loadContent('123');
  }

  ngOnInit() {

  }

  loadContent(cin){

     //call service get data 
       if(cin === '123'){
          this.firstName = 'Todd';
          this.lastName = 'Bu';
       }else if(cin ==='124'){
          this.firstName = 'Heinz';
          this.lastName = 'Fei';  
       }
  }

}
