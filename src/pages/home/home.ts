import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ApiService } from '../shared/shared';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  team : any;
  apiTeams: any;
  teams = [
    {name:'India'},
    {name:'Srilanka'},
    {name:'Pakistan'}
  ];
  constructor(public navCtrl: NavController, private apiservice: ApiService) {

  }

  navTo($event,team)
  {
    this.navCtrl.push(AboutPage,team);
  }


  ionViewDidLoad(){
    this.apiservice.getTeam().then(data => this.apiTeams = data)
  }
  navToApi($event,item)
  {
    this.navCtrl.push(AboutPage,item);
  }

}
