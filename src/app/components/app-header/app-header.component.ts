import { Component, OnInit } from '@angular/core';
import { UiStateService } from 'src/app/services/ui-state/ui-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  limit = 2;
  currentCount = 0
  constructor(
    public ui: UiStateService,
  ) {
    this.ui.counter.subscribe(e => {
      this.currentCount = e
      if (e > this.limit + 2) {
        this.ui.counter.subscribe(e => e = 0)
      }
    })
  }
  // limit + 5 = 0



  ngOnInit(): void {
  }

}
