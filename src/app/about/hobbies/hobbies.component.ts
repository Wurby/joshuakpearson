import { Component, OnInit } from '@angular/core';
import { astroPhoto, foodPhoto } from '../hobbies/hobbies.data.component';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent {
  astroPhoto = astroPhoto;
  foodPhoto = foodPhoto;
  photoIndex = 0;
  foodIndex = 0;

  constructor() {}

  changePhoto(selection) {
    switch (selection) {
      case 'astro':
        if (this.photoIndex < this.astroPhoto.length - 1) {
          this.photoIndex++;
        } else {
          this.photoIndex = 0;
        }
        break;
      case 'food':
        if (this.foodIndex < this.foodPhoto.length - 1) {
          this.foodIndex++;
        } else {
          this.foodIndex = 0;
        }
        break;
      default:
        break;
    }
  }
}
