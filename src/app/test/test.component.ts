import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/range';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    constructor(public auth: AuthService) { }

    ngOnInit() {
        // Observable.range(1, 10).subscribe((d) => {
        //     console.log(d);
        // });
        const hot = Observable.create((observer) => {
            Observable.interval(2000).subscribe((d) => {
                console.log(d);
                observer.next(new Date().getTime());
            });
        }).publish();
        hot.connect();
        hot.subscribe((d) => {
            console.log(d);
        });
        hot.subscribe((d) => {
            console.log(d);
        });
    }
}
