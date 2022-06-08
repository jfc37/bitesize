import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugToCourseLink',
})
export class SlugToCourseLinkPipe implements PipeTransform {
  transform(value: string): string {
    return `/courses/${value}`;
  }
}
