import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonSubjectService {
    sub = new Subject<number>();

    constructor() {
        // 模拟批量产生数据
        const timer = Observable.timer(1000, 2000).subscribe((i) => {
            console.log('producing data:', i);
            this.sub.next(i);
        });
    }

}
