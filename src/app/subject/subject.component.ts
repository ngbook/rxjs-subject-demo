import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

    constructor(private subService: SubjectService) {}

    ngOnInit() {
        // 订阅1
        const sub1 = this.subService.sub.subscribe((d) => {
            console.log('observer-1:', d);
        }, (err) => {
            console.log('error-1', err);
        });
        // 订阅2
        let sub2: Subscription;
        setTimeout(() => {
            console.log('observer-2 开始订阅');
            sub2 = this.subService.sub.subscribe((d) => {
                console.log('observer-2:', d);
            }, (err) => {
                console.log('error-2', err);
            });
        }, 4000); // 4秒后开始订阅
        setTimeout(() => {
            console.log(sub1.closed); // 结果：true
            console.log(sub2.closed); // 结果：true
            console.log(this.subService.sub.closed); // 结果：false
        }, 6000); // 6秒后，异常已抛出，查看各状态
    }
}
