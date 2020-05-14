import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/models/iresponse';
import { IBooks } from 'src/app/models/ibooks';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit, OnChanges {

  books$: Observable<IResponse>;
  booksArray: IBooks[];
  page = 1;
  pageSize = 10;
  collectionSize: number;
  searchValue: string;
  isLoading = true;

  constructor(private router: Router, private service: BooksService) {
    this.searchValue = this.router.getCurrentNavigation().extras.state.value;
   }

  ngOnChanges(changes: SimpleChanges): void {
    this.getBooks(this.searchValue);
  }

  ngOnInit(): void {
    this.getBooks(this.searchValue);
  }

  getBooks(value: string) {
    this.books$ = this.service.getBooks(value);
    this.books$.subscribe(response => {
      this.isLoading = false;
      console.log(response.items.length);
      console.log(response.items);
      this.collectionSize = response.items.length;
      this.booksArray = response.items;
    });
  }

  get books(): IBooks[] {
    if (!this.isLoading) {
      return this.booksArray
        .map((book, i) => ({ Id: i + 1, ...book }))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

  }
}
