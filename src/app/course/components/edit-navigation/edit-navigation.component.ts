import { Component, Input, OnInit } from '@angular/core';
import { Page } from 'src/app/types/courses';

@Component({
  selector: 'app-edit-navigation',
  templateUrl: './edit-navigation.component.html',
  styleUrls: [
    '../view-navigation/view-navigation.component.scss',
    './edit-navigation.component.scss',
  ],
})
export class EditNavigationComponent implements OnInit {
  @Input()
  public courseName!: string;

  @Input()
  public pages!: Page[];

  constructor() {}

  ngOnInit(): void {}
}
