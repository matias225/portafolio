import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public anio: number;
  public email: string;

  constructor(
  ) {
    this.anio = new Date().getFullYear();
    this.email = 'matiasnromani@gmail.com';
  }

  ngOnInit() {
  }

}
