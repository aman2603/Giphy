import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  gifs(limit: Number, Offset: Number) {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY&limit=${limit}&offset=${Offset}`
    );
  }
  
  gifsSearch(search: String, limit: Number, offset: Number) {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/search?api_key=Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY&q=${search}&limit=${limit}&offset=${offset}`
    );
  }

}

