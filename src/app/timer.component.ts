import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-timer',
    template: '<p>{{message}}</p>'
  })
  export class CountdownTimerComponent implements OnInit, OnDestroy {

   intervalId = 0;
    message = '';
    seconds = 11;

   clearTimer() { clearInterval(this.intervalId); }

   ngOnInit()    { this.start(); }
    ngOnDestroy() { this.clearTimer(); }

   start() { this.countDown(); }
    stop()  {
      this.clearTimer();
      this.message = `Holding at T-${this.seconds} seconds`;
    }
   private countDown() {
      this.clearTimer();
      this.intervalId = window.setInterval(() => {
        this.seconds -= 1;
        if (this.seconds === 0) {
          this.message = 'Game Over';
        } else {
          if (this.seconds < 0) { this.seconds = 0; stop(); } // reset
          this.message = `T-${this.seconds} Time Remaining`;
        }
      }, 1000);
    }
  }