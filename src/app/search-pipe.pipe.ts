import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(trendingAll:any[],term:string): any[] {
    return trendingAll.filter((movie)=>movie.title.toLowerCase().includes(term.toLowerCase()));
  }

}
