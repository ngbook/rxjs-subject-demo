import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
    selector: 'app-replay-subject',
    templateUrl: './replay-subject.component.html',
    styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

    ngOnInit() {
        const sub = new ReplaySubject<number>(Number.MAX_VALUE, 2000);
        const timer = Observable.timer(1000, 1000).subscribe((d) => {
            console.log('producing data', d);
            sub.next(d);
        });

        setTimeout(() => {
            console.log('开始订阅');
            sub.subscribe((d) => {
                console.log('observer got data:', d);
            }, (err) => {
                console.log('err', err);
            });
        }, 3000);

        setTimeout(() => {
            console.log('发生异常');
            sub.error('Oops');
            setTimeout(() => {
                timer.unsubscribe();
            }, 2000);
        }, 5000);
    }
}
