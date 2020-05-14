import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJob } from '../models/ijob';
import { jobsApi, serviceUrl } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJobsStartsWith(value: string): Observable<IJob[]> {
    return this.http.get<IJob[]>(`${serviceUrl.jobService.startsWith}${value}`);
  }
}
