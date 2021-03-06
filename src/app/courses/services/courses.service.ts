import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap, delay, take } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:5000/courses';

  constructor(private httpClient: HttpClient) {}

  getCourses() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      take(1),
      tap(courses => {
        console.log(courses);
      })
    );
  }
}
