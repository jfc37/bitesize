import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Page } from 'src/app/types/courses';

@Component({
  selector: 'app-edit-navigation',
  templateUrl: './edit-navigation.component.html',
  styleUrls: [
    '../view-navigation/view-navigation.component.scss',
    './edit-navigation.component.scss',
  ],
})
export class EditNavigationComponent {
  @Input()
  public courseName!: string;

  @Input()
  public pages!: Page[];

  @Output()
  public addPage = new EventEmitter<number>();

  @Output()
  public removePage = new EventEmitter<number>();
}
