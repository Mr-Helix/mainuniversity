import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})

export class itemCardComponent implements OnInit {
  ngOnInit(): void {

  }
  
@Input() item: any;



}