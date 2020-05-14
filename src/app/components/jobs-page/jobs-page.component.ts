import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { IJob } from 'src/app/models/ijob';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent implements OnInit, OnChanges {

  jobs$: Observable<IJob[]>;
  jobsArray: IJob[];
  page = 1;
  pageSize = 25;
  collectionSize: number;
  isLoading = true;
  searchValue: string;
  isLive = false;
  constructor(private router: Router, private service: JobService) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.getJobs(this.searchValue);
  }

  ngOnInit(): void {
  }

  getJobs(value: string) {
    this.jobs$ = this.service.getJobsStartsWith(value);
    this.jobs$.subscribe(response => {
      this.isLoading = false;
      this.collectionSize = response.length;
      this.jobsArray = response;
    });
  }

  get jobs(): IJob[] {
    if (!this.isLoading) {
      return this.jobsArray
        .map((country, i) => ({ id: i + 1, ...country }))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
  }

  searchJob(searchValue: string) {
    this.isLive = true;
    this.getJobs(searchValue);
  }

  openBooks(searchValue: string) {
    this.router.navigate(['books'], {state: {value: searchValue}});
  }

}
