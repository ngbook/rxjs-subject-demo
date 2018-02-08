import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Injectable()
export class SubjectService {

    sub = new Subject<number>();

    constructor() {
        // 模拟批量产生数据
        const timer = Observable.timer(1000, 2000).subscribe((i) => {
            console.log('producing data:', i);
            if (i === 2) { // 不产生第三个数据，直接抛出异常
                console.log('发生异常');
                this.sub.error('Oops');
            } else {
                this.sub.next(i);
            }
            if (i === 3) { // 第四个数据，为了测试在异常抛出后数据是否被处理
                timer.unsubscribe();
            }
        });
    }
}
