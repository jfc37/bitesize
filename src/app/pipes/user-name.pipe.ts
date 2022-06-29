import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@angular/fire/auth';

@Pipe({
  name: 'userName',
})
export class UserNamePipe implements PipeTransform {
  transform(value: User | null): string {
    console.error('UserNamePipe', value);

    if (!value) {
      return '';
    }

    if (value.isAnonymous) {
      return 'Anonymous';
    }

    return value.displayName || value.email || value.uid;
  }
}
