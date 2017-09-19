import { Component } from '@angular/core';
import { CountdownTimerComponent } from './timer.component';
import { OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    title = 'app';
    intervalId = 0;
    message = '';
    seconds = 5;
    flag = 1;

    random: any;
    state: any;
    id: any;
    count = 0;
    temp: any;

    clearTimer() { clearInterval(this.intervalId); }

    // ngOnInit()    { this.start(); }
    ngOnDestroy() { this.clearTimer(); }

    start() { this.countDown(); }
      stop() {
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`;
      }
     private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
          this.seconds -= 1;
          if (this.seconds === 0) {
            this.message = 'GAME OVER';
          } else {
             if (this.seconds < 0) { this.seconds = 0; this.flag = 0; }
             // reset
             if (this.flag === 1 ) {
             this.message = `T-${this.seconds} Time Remaining`; }
          }
        }, 1000);
      }

      function(number:any):any{
        console.log(number);
        this.state='state'+number;
        this.id=number;
        console.log(this.state);
        this.random=(Math.floor((Math.random( ) *20)%4)+1);
        console.log(this.random);
        }

        change(btn,number:any)
        { 
          if(number==this.temp)
          this.count +=1;
          this.state='b1';
          var property=document.getElementById(this.state);
          property.style.background="black";
          this.state='b2';
          var property=document.getElementById(this.state);
          property.style.background="black";
          this.state='b3';
          var property=document.getElementById(this.state);
          property.style.background="black";
          this.state='b4';
          var property=document.getElementById(this.state);
          property.style.background="black";
          this.state='b'+this.random;
          var property=document.getElementById(this.state);
          property.style.background="white";
          console.log(this.count);
          this.temp = this.random;
        }
}

  


