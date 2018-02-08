import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { CommonSubjectService } from '../services/common-subject.service';

@Component({
    selector: 'app-subject-error',
    templateUrl: './subject-error.component.html',
    styleUrls: ['./subject-error.component.scss']
})
export class SubjectErrorComponent implements OnInit {

    constructor(private subService: CommonSubjectService) { }

    ngOnInit() {
        // 订阅者1
        const sub1 = this.subService.sub.subscribe((d) => {
            console.log('observer-1', d);
        }, (err) => {
            console.log('err-1', err);
        });

        // 订阅者2
        setTimeout(() => {
            const sub2 = this.subService.sub.map(d => {
                if (d === 3) {
                    throw new Error('订阅者1出现异常...');
                }
                return d;
            }).subscribe((d) => {
                console.log('observer-2', d);
            }, (err) => {
                console.log('err-2', err);
            });
        }, 1000);
    }
}
