import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
  standalone: false,
})
export class MorePage
  implements
    OnInit,
    ViewWillEnter,
    ViewWillLeave,
    OnDestroy,
    ViewDidEnter,
    ViewDidLeave
{
  constructor() {}

  ngOnInit() {
    console.log('Page on Init');
  }

  ionViewWillEnter() {
    console.log('Ion View Will Enter');
  }

  ionViewWillLeave(): void {
    console.log('Ion View will Leave');
  }

  ngOnDestroy(): void {
    console.log('Destroyed the page');
  }

  ionViewDidEnter(): void {
    console.log('View Did Enter');
  }

  ionViewDidLeave(): void {
    console.log('View Did leave');
  }
}
