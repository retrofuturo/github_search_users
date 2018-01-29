import { Component, OnInit } from '@angular/core';

import { GithubDataService } from '../../services/github-data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  infoAboutUser: any;

  constructor(
    public githubService: GithubDataService
  ) { }

  ngOnInit() {
    this.infoAboutUser = this.githubService.getUser();
    console.log(this.infoAboutUser);
    }
  }


