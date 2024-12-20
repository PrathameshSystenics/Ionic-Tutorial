import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  standalone: false,
})
export class SimpleComponent implements OnInit {
  showLoading: boolean = false;
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
}
