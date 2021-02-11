import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from "rxjs"

@Component({
  selector: 'fa-other-path',
  templateUrl: './other-path.component.html',
  styleUrls: ['./other-path.component.css']
})
export class OtherPathComponent implements OnInit, OnDestroy {

  mySubscription: Subscription;
  subscriptionArray: number[];
  showAclaratoryText: boolean;

  constructor() {
    this.subscriptionArray = [];
    this.showAclaratoryText = false;
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.stopSubscription();
  }

  startSubscription() {
    this.showAclaratoryText=false;
    this.subscriptionArray=[];
    this.mySubscription = interval(1000).subscribe(count => {
      this.subscriptionArray.push(count);
      if (count === 10) this.stopSubscription();
    });
  }

  stopSubscription() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
      this.showAclaratoryText=true;
    }
  }
}
