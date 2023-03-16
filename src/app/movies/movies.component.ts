import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  trendingAll:any[]= []
  pages:number[]=[]
  pageNum:number=10
  term:string=''
  imagePrefix:string='https://image.tmdb.org/t/p/w500'
  constructor(private _movies:MoviesService){}
  
  ngOnInit(): void {
    this.pages=new Array(this.pageNum).fill(0).map((x,i)=>i+1)
      this._movies.getMoviesByPagination(1).subscribe({
        next:(response)=>
          this.trendingAll = response.results
        
      })
     
    
  }
  test(pageNumber:number){
    this._movies.getMoviesByPagination(pageNumber).subscribe({
      next:(response)=>
        this.trendingAll = response.results
      
    })
  }
}
