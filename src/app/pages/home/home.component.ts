import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  arrowRight = faArrowRight;
  arrowLeft = faArrowLeft;
  isChecked = false;

  constructor(
    private breakpointObserver: BreakpointObserver
    ) {
    this.breakpointObserver.observe([
      "(max-width: 991px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.isChecked = false;
      } else {
        this.isChecked = true;
      }
    });
  }

  ngOnInit(): void {}

  checkValue(e: any){
    this.isChecked = e.target.checked;
  }
}
