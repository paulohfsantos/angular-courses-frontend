import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

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
  courses$: Observable<Course[]>;
  displayedColumns = [ 'name', 'category' ];

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.courses$ = this.coursesService.getCourses()
      .pipe(
        catchError(err => {
          this.onError("Error retrieving courses");
          return of([]);
        })
      )

    // console.log(this.courses$);
  }

  ngOnInit(): void {}

  onError(err: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: err
    });
  }

}
