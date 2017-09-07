import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'concatToString' })
export class ConcatToStringPipe implements PipeTransform {
    transform(array, args?: any): any {
        let stringArray = Object.assign([], array);
        if (!args) {
            stringArray = array.reduce((x, y) => x + ',' + y, '');
        }
        stringArray = array.reduce((x, y) => x === '' ? y[args] : x + ', ' + y[args], '');

        return stringArray;
    }
}
