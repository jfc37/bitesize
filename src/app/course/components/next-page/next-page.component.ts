import { Component, Input, OnInit } from '@angular/core';
import { Page } from 'src/app/types/courses';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.scss'],
})
export class NextPageComponent implements OnInit {
  @Input()
  public pages!: Page[];

  @Input()
  currentPage!: Page;

  public get nextPage(): Page | undefined {
    return this.pages.find(
      (page) => page.number === this.currentPage.number + 1
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
