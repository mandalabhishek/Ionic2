import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  team:any;
  constructor(public navCtrl: NavController, private navPara: NavParams) {
    this.team = this.navPara.data;
    console.log('** nav param:', this.navPara);
  }
}
