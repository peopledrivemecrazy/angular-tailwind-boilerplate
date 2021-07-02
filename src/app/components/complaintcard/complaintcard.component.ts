import { Component, OnInit } from '@angular/core';
import { UiStateService } from 'src/app/services/ui-state/ui-state.service';

@Component({
  selector: 'app-complaintcard',
  templateUrl: './complaintcard.component.html',
  styleUrls: ['./complaintcard.component.scss']
})
export class ComplaintcardComponent implements OnInit {

  currentCount = 0;
  constructor(
    private ui: UiStateService
  ) {
    this.ui.counter.subscribe(e => this.currentCount = e);
  }

  add() {
    this.ui.counter.next(this.currentCount += 1);
  }
  ngOnInit(): void {
  }

}
