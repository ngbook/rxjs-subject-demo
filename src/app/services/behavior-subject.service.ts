import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BehaviorSubjectService {

    sub = new BehaviorSubject<string>('init');

    constructor() {
        // 简单模拟产生数据
        setTimeout(() => {
            console.log('producing data 1');
            this.sub.next('value 1');
        });
        // 模拟异常
        setTimeout(() => {
            console.log('发生异常');
            this.sub.error('Oops...');

            // 测试异常后数据是否还会被处理
            setTimeout(() => {
                console.log('producing data 2');
                this.sub.next('value 2');
            }, 2000);
        }, 2000);
    }
}
