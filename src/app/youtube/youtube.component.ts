
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  url: string;
  videoURL: SafeUrl;
  constructor(private router: ActivatedRoute, public sanitizer: DomSanitizer) {
    this.URLofPhoto();
  }
  ngOnInit() {
  }
  URLofPhoto() {
    this.url = 'https://www.youtube.com/embed/' + this.router.snapshot.params['id'];
    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
