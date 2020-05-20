import { GetService } from './../shared/get.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albumList;
  photos = [];
  title;
  singleImage;
  galleryopen = document.getElementsByClassName('shadow') as HTMLCollectionOf<
    HTMLElement
  >;
  imageopen = document.getElementsByClassName('shadow-two') as HTMLCollectionOf<
    HTMLElement
  >;
  constructor(private get: GetService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.get.getAlbums().subscribe(
      (res) => {
        console.log(res);
        this.albumList = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openGallery(id, name) {
    this.title = name;
    this.galleryopen[0].style.display = 'block';
    console.log(id);
    this.get.getPhotos().subscribe(
      (res) => {
        console.log(res);
        for (var i in res) {
          if (id === res[i].albumId) this.photos.push(res[i]);
        }
        console.log(this.photos);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  openImage(url) {
    this.singleImage = url;
    this.imageopen[0].style.display = 'block';
  }
  closeGallery() {
    this.galleryopen[0].style.display = 'none';
  }
  closeImage() {
    this.imageopen[0].style.display = 'none';
  }
}
