import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

export interface ICourse {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  isFavorite: boolean;
};
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Observable<Course[]>;
  displayedColumns = [ 'name', 'category' ];

  // coursesService: CoursesService

  constructor(private coursesService: CoursesService) {
    // this.coursesService = new CoursesService(httpClient: HttpClient);
    // this.coursesService.getCourses()

    this.courses = this.coursesService.getCourses();
  }

  ngOnInit(): void {}

}
