
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'withFirstChar' })
export class WithFirstCharPipe implements PipeTransform {
    transform(array: any[]): any {
        let arrayWithFirstChar;
        arrayWithFirstChar = array.map(element => element = Object.assign({}, element, { first_char: element.name[0] }))
        return arrayWithFirstChar;
    }
}

