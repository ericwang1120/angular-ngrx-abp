import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'name' })
export class NamePipe implements PipeTransform {
    transform(array, args: any): any {
        array = Object.assign([], array);
        if (args) {
            return array.filter(element => element.id === args)
                .map(element => element = element.name)[0];
        }
        return '';
    }
}
