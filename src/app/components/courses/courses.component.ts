import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  list_courses! : Course[];
  course : Course = new Course();

  constructor(private _service : CoursesService) { }

  ngOnInit(): void {
      this._service.getCourses().subscribe(
        data => this.list_courses = data
      )
  }


  add()
  {
    this._service.addCourse(this.course).subscribe(
      data => {this.list_courses.push(data);
        this.course = new Course();
      }
    )
  }

}
