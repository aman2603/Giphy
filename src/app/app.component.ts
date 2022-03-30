import { Component } from '@angular/core';
import {ApiService} from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'two';

  serachTitle: any;
  array: any = [];
  limit: Number = 10;
  offset: Number = 1;
  page: any;
  total: any;
  pageoffset: any;
  total_count: any;

constructor(private api:ApiService){
  this.getGifs(this.offset)

}

  getGifs(offset: Number) {
    this.api.gifs(this.limit, offset).subscribe((res: any) => {
      this.array = res.data;
      this.pageoffset = res.pagination.offset;
      console.log(this.pageoffset);
      this.total_count = res.pagination.total_count;
      console.log(this.page.offset, 'ooooooo');
      console.log(this.array);
    });
  }

  search() {
    this.api
      .gifsSearch(this.serachTitle, this.limit, this.offset)
      .subscribe((res: any) => {
        this.array = res.data;
        this.page = res.pagination;
        console.log(this.array, 'search');
      });
  }
  change(event: any) {
    console.log(event);
   
    this.getGifs(event.pageIndex + 1);

  }
}
