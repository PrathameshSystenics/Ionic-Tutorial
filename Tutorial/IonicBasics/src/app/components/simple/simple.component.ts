import { Component, OnInit } from '@angular/core';
import {
  IonItemSliding,
  ItemReorderEventDetail,
  RefresherEventDetail,
  ToggleChangeEventDetail,
} from '@ionic/angular';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  standalone: false,
})
export class SimpleComponent implements OnInit {
  showLoading: boolean = false;
  toShowExtraDetails: boolean = false;
  constructor() {}

  ngOnInit() {}

  deleteMessage(id: string) {
    document.getElementById(id)?.remove();
  }

  loadData() {
    this.showLoading = true;
    setTimeout(() => {
      this.showLoading = false;
    }, 2000);
  }

  refreshData(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      event.detail.complete();
    }, 3000);
  }

  doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    console.log('dragged from ', event.detail.from, 'to ', event.detail.to);
    event.detail.complete();
  }

  enableExtraOptions(event: CustomEvent<ToggleChangeEventDetail>) {
    this.toShowExtraDetails = event.detail.checked;
  }
}
