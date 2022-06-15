import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { pairwise, startWith } from 'rxjs';
import { Page } from 'src/app/types/courses';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.scss'],
})
export class EditContentComponent implements OnInit, OnChanges {
  @Input()
  public page!: Page;

  @Output()
  public titleUpdated = new EventEmitter<string>();

  @Output()
  public sectionsUpdated = new EventEmitter<string[]>();

  public pageFormGroup!: FormGroup;

  private get sectionsFormArray(): FormArray {
    return this.pageFormGroup.get('sections') as FormArray;
  }

  constructor(private formBuild: FormBuilder) {}

  public ngOnInit(): void {
    this.pageFormGroup = this.formBuild.group(
      {
        name: this.page.name,
        sections: this.formBuild.array(this.page.sections || []),
      },
      { updateOn: 'blur' }
    );

    this.pageFormGroup.valueChanges
      .pipe(startWith(this.pageFormGroup.value), pairwise())
      .subscribe(([previous, current]) => {
        if (previous.name != current.name) {
          this.titleUpdated.emit(current.name);
        } else {
          this.sectionsUpdated.emit(current.sections);
        }
      });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['page'] && !changes['page'].isFirstChange()) {
      this.pageFormGroup.patchValue(this.page, { emitEvent: false });
    }
  }

  public addSection(index: number): void {
    this.sectionsFormArray.insert(index, this.formBuild.control(''));
  }

  public removeSection(index: number): void {
    this.sectionsFormArray.removeAt(index);
  }
}
