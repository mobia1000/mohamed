import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss'],
})
export class PrinterComponent implements OnInit {

    constructor(
  )
  {
      // Configure the layout
    
    }

  ngOnInit() {
  
    
    
  }

  print(){
    window.print()
  }
}
