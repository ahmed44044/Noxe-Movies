import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-singlemovies',
  templateUrl: './singlemovies.component.html',
  styleUrls: ['./singlemovies.component.css']
})
export class SinglemoviesComponent implements  OnInit{
  movieId:string=''
  moviesDetails:any;
  imagePrefix:string='https://image.tmdb.org/t/p/w500'
  constructor(private _ActivatedRoute:ActivatedRoute,private _movies:MoviesService){}
  ngOnInit(): void {
    this.movieId = this._ActivatedRoute.snapshot.params['id']
    this._movies.getMovieDetails(this.movieId).subscribe({
      next:(response)=>{
        this.moviesDetails=response
      }
    })
  }

}
