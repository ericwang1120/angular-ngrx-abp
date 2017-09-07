
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'pivot' })
export class PivotPipe implements PipeTransform {
    transform(array: any[], key): any {
        //find out the groups
        let groupArray = array.map(element => element[key]);
        groupArray = this.remove_duplicates(groupArray);

        let pivotArray = [];

        groupArray.forEach(element => {
            let tmpObj = { key: element };
            //push each element of the array group by the value of the given key
            tmpObj['value'] = array.filter(obj => obj[key] == element);
            pivotArray.push(tmpObj);
        });
        return pivotArray;
    }

    private remove_duplicates(arr) {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            obj[arr[i]] = true;
        }
        arr = [];
        for (let key in obj) {
            arr.push(key);
        }
        return arr;
    }
}

