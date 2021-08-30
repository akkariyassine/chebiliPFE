import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
favorites: any
  constructor( public servicedata: DataService) { }

  ngOnInit(): void {
    this.getFavorite();
  }

  getFavorite(){
    this.servicedata.getFavorites().subscribe(res=>{
      this.favorites= JSON.parse(res);
      console.log(JSON.parse(res));
    //  console.log(JSON.stringify(this.favorites.data.id));
     // console.log(res.padStart.)
    })
  }

  //*ngFor="let upcoming of upcomings"
}
