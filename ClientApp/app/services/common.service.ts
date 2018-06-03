import { Injectable } from "@angular/core";

@Injectable()
export class CommonService {
    constructor() {

    }

    ColumnListFromObjectList(_list: any[], column: string): any {
        var columnList = [];
        for (var i = 0; i < _list.length; i++) {
            columnList.push(_list[i][column]);
        }
        return columnList;
    }
}