import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('logo')
    ele: ElementRef;

    ngOnInit() {
        Observable.fromEvent(this.ele.nativeElement, 'click')
            .subscribe((event) => {
                console.log(event);
            });
    }

}
