import { Component, OnInit } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [  
    { img: "assets/images/offer.png" },  
    { img: "assets/images/offer2.png" },  
    { img: "assets/images/offer3.png" },  
    { img: "assets/images/offer.png" },   
  ]; 

  artistImages = [  
    { img: "assets/images/offer.png" },  
    { img: "assets/images/offer2.png" },  
    { img: "assets/images/offer3.png" },  
    { img: "assets/images/offer.png" },
    { img: "assets/images/offer.png" },
    { img: "assets/images/offer.png" },
    { img: "assets/images/offer.png" },
    { img: "assets/images/offer.png" },
    { img: "assets/images/offer.png" },
    { img: "assets/images/offer.png" },
  ]; 
  slideConfig = {  
    // "slidesToShow": 3,  
    "infinite": true,
    "slidesToScroll": 3,  
    "dots": true,  
    slidesToShow: 2.93,
    nextArrow: '<button class="offer-btn offer-next"><i class="fas fa-chevron-right"></i></button>',
    prevArrow: '<button class="offer-btn offer-prev"><i class="fas fa-chevron-left"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ] 
  }; 
  slideConfigArtist = {  
    "slidesToShow": 5,  
    "infinite": true,
    "slidesToScroll": 5,  
    "dots": true,  
    centerMode: true,
    nextArrow: '<button class="artist-btn artist-next"><i class="fas fa-chevron-right"></i></button>',
    prevArrow: '<button class="artist-btn artist-prev"><i class="fas fa-chevron-left"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true
        }
      }
    ]
  }; 


  
  constructor() {}
  
  ngOnInit(): void {
  }

}
