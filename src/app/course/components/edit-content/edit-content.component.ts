import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Page } from 'src/app/types/courses';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.scss'],
})
export class EditContentComponent implements OnInit {
  @Input()
  public page!: Page;

  @Output()
  public pageUpdated = new EventEmitter<Page>();

  public pageFormGroup!: FormGroup;

  constructor(private formBuild: FormBuilder) {}

  ngOnInit(): void {
    console.error('xxx', this.page);

    this.pageFormGroup = this.formBuild.group(
      { ...this.page, sections: this.formBuild.array(this.page.sections) },
      { updateOn: 'blur' }
    );

    this.pageFormGroup.valueChanges.subscribe((value) =>
      this.pageUpdated.emit(value as Page)
    );
  }
}
