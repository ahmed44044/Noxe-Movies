import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingAll:any[]= []


imagePrefix:string='https://image.tmdb.org/t/p/w500'
constructor(private _movies:MoviesService){ }



ngOnInit(): void {
    this._movies.getTrending('all').subscribe({
      next:(response)=>
        this.trendingAll = response.results.slice(0,20)
      
    })
 
  
}
}
