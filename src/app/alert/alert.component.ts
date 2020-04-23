import {Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { AlertService } from '../alert.service';

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy{
    private subscription: Subscription;
    message: any;
     
    constructor(private alertservice: AlertService){ }

    ngOnInit(){
        this.subscription = this.alertservice.getMessage().subscribe(message => {
            this.message = this.message;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}