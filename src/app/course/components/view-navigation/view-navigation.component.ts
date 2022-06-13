import { Component, Input, OnInit } from '@angular/core';
import { Page } from 'src/app/types/courses';

@Component({
  selector: 'app-view-navigation',
  templateUrl: './view-navigation.component.html',
  styleUrls: ['./view-navigation.component.scss'],
})
export class ViewNavigationComponent implements OnInit {
  @Input()
  public courseName!: string;

  @Input()
  public pages!: Page[];

  constructor() {}

  ngOnInit(): void {}
}
