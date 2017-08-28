import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-random-face',
  templateUrl: './random-face.component.html',
  styleUrls: ['./random-face.component.css']
})
export class RandomFaceComponent implements OnInit {

  private URI = 'https://api.adorable.io/avatars/';
  private url = '';

  ngOnInit() {
    setInterval(() => {
      this.getface();
    }, 2000);
  }

  private getface() {
    const face = Math.random();
    this.url = `${this.URI}${face}`;
  }
}

