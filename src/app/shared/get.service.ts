import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  constructor(private http: HttpClient) {}

  getDetail(username) {
    return this.http.get(
      'http://localhost:3000/getDetails?username=' + username
    );
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
  getPhotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
  getTodos(id) {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/todos?userId=' + id
    );
  }
}
