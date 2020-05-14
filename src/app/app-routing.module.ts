import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsPageComponent } from './components/jobs-page/jobs-page.component';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'jobs', component: JobsPageComponent },
    { path: 'books', component: BooksPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
