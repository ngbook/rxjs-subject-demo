import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectService } from '../services/behavior-subject.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-behavior-subject',
    templateUrl: './behavior-subject.component.html',
    styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {

    constructor(private subService: BehaviorSubjectService) {}

    ngOnInit() {
        // 订阅者1
        const sub1 = this.subService.sub.subscribe((d) => {
            console.log('observer-1', d);
        }, (err) => {
            console.log('err-1', err);
        });

        // 订阅者2
        let sub2: Subscription;
        setTimeout(() => { // 延迟到数据流出现异常的之后
            console.log('observer-2 开始订阅');
            sub2 = this.subService.sub.subscribe((d) => {
                console.log('observer-2', d); // 不会到这里
            }, (err) => {
                console.log('err-2', err);
            });
        }, 3000);
        // 最后检查
        setTimeout(() => {
            console.log(sub1.closed);
            console.log(sub2.closed);
            console.log(this.subService.sub.closed);
        }, 4000);
    }
}
