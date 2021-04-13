import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../constants';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  private apiUrl = `${API_BASE_URL}/courses`;
  courses = [];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => this.courses = data);
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  ngOnInit(): void {
  }

}
