import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _Http:HttpClient) { }
  getTrending(mediaType:string):Observable<any>
  {
    return this._Http.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
  }
  getMovieDetails(id:string):Observable<any>
  {
    return this._Http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`);
  }
  getMoviesByPagination(page:number):Observable<any>{
    return this._Http.get(`
    https://api.themoviedb.org/3/discover/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
  }
}


