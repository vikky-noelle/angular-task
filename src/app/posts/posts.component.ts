import { GetService } from './../shared/get.service';
import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private get: GetService) {}

  title;
  content;
  postList;
  commentList = [];
  postopen = document.getElementsByClassName('view-post') as HTMLCollectionOf<
    HTMLElement
  >;
  shadow = document.getElementsByClassName('shadow') as HTMLCollectionOf<
    HTMLElement
  >;
  ngOnInit(): void {
    this.getposts();
  }

  getposts() {
    this.get.getPosts().subscribe(
      (res) => {
        console.log(res);
        this.postList = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getComments(id) {
    for (var i in this.postList) {
      if (this.postList[i].id === id) {
        console.log('match');
        this.title = this.postList[i].title;
        this.content = this.postList[i].body;
      }
    }
    this.shadow[0].style.display = 'block';
    this.postopen[0].style.display = 'block';
    console.log(id);
    this.get.getComments().subscribe(
      (res) => {
        // console.log(res);
        for (var i in res) {
          if (res[i].postId === id) this.commentList.push(res[i]);
        }
        console.log(this.commentList);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  close() {
    this.shadow[0].style.display = 'none';
    this.postopen[0].style.display = 'none';
  }
}
