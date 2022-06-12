import { Component, Input } from '@angular/core';
import { Page } from 'src/app/types/courses';

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.scss'],
})
export class ViewContentComponent {
  @Input()
  public page!: Page;
}
