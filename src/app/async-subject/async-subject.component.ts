import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-async-subject',
    templateUrl: './async-subject.component.html',
    styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        const sub = new AsyncSubject();

        // 订阅1
        sub.subscribe((d) => {
            console.log('observer-1:', d);
        });
        // 订阅2
        sub.subscribe((d) => {
            console.log('observer-2:', d);
            if (d === 1) {
                throw new Error('Oops');
            }
        });

        // 简单模拟产生数据
        console.log('producing data...');
        sub.next(100);
        sub.next(200);
        sub.next(300);
        sub.complete();
    }

}
