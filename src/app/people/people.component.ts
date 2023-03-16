import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
constructor(private _movies:MoviesService){}
trendingPerson:any[]=[]
imagePrefix:string='https://image.tmdb.org/t/p/w500'
ngOnInit(): void {
  this._movies.getTrending('person').subscribe({
    next:(response)=>
      this.trendingPerson = response.results.slice(0,20)
    
  })
}
}
