import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../constants';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course = {
    id: '',
    name: '',
    description: '',
    avatar: '',
    registrationUrl: '',
  };
  isVisible = false;

  private apiUrl = `${API_BASE_URL}/courses`;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
      ) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getCourse(id).subscribe(data => this.course = data);
  }

  public getCourse(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  public goToBuyNow(): void {
    window.open(this.course.registrationUrl, '_blank').focus();
  }

}
