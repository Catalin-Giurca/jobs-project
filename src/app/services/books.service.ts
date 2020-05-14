import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBooks } from '../models/ibooks';
import { IResponse } from '../models/iresponse';
import { serviceUrl } from '../constants/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
  }

  getBooks(value: string): Observable<IResponse> {
    console.log(value);
    return this.http.get<IResponse>(`${serviceUrl.bookService.findBooks}${value}`);
  }
}
