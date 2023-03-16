import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from '../auth.service';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-net-works',
  templateUrl: './net-works.component.html',
  styleUrls: ['./net-works.component.css']
})
export class NetWorksComponent implements OnInit {
  trendingMovies:any[]= []


  imagePrefix:string='https://image.tmdb.org/t/p/w500'
constructor(private _movies:MoviesService){}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 8
    }
  },
  nav: true
}
ngOnInit(): void {
  this._movies.getTrending('movie').subscribe({
    next:(response)=>
      this.trendingMovies = response.results
    
  })
}
}
