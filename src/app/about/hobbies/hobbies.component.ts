import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent implements OnInit {
  index = 0;
  photo = [
    {
      description: 'Polaris on a light polluted night.',
      url: 'https://wurbys3.s3.us-east-2.amazonaws.com/polaris.jpg',
    },
    {
      description: 'Juniper at night',
      url:
        'https://wurbys3.s3.us-east-2.amazonaws.com/joshuakpearson.com/juniper.jpg',
    },
    {
      description: 'Looking toward west mountain',
      url:
        'https://wurbys3.s3.us-east-2.amazonaws.com/joshuakpearson.com/west+mountain.jpg',
    },
    {
      description: 'A truck passes while looking toward Mount Timpanogos',
      url:
        'https://wurbys3.s3.us-east-2.amazonaws.com/joshuakpearson.com/big+rig.jpg',
    },
    {
      description: 'The alpine corner on a winter night',
      url:
        'https://wurbys3.s3.us-east-2.amazonaws.com/joshuakpearson.com/Alpine+corner.jpg',
    },
    {
      description: 'A cold, dark tree',
      url:
        'https://wurbys3.s3.us-east-2.amazonaws.com/joshuakpearson.com/dark+tree.jpg',
    },
    {
      description: 'Steam and clouds',
      url:
        'https://wurbys3.s3.us-east-2.amazonaws.com/joshuakpearson.com/steam+and+clouds.jpg',
    },
  ];

  constructor() {}

  ngOnInit() {}

  changePhoto() {
    if (this.index < this.photo.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
  }
}
