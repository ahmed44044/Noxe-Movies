import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
constructor(private _movies:MoviesService){}
trendingTv:any[]=[]
imagePrefix:string='https://image.tmdb.org/t/p/w500'
ngOnInit(): void {
  this._movies.getTrending('tv').subscribe({
    next:(response)=>
      this.trendingTv = response.results.slice(0,20)
    
  })
}
}
