import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddReviewComponent } from "../../components/add-review/add-review";
import { Http } from "@angular/http";
/**
 * Generated class for the MovieReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-review',
  templateUrl: 'movie-review.html',
})
export class MovieReviewPage {
  imgSrc = `url('${this.navParams.get('imgUrl')}')`;
  imgHeight = "80vh";
  film = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public dialog: MatDialog, private http: Http) {
    console.log(this.navParams.get('imgUrl'));
    console.log(this.navParams.get('id'));

    this.http.get(`https://ionicmoviereviewapp.herokuapp.com/get-details-by-id/${this.navParams.get('id')}`).toPromise().then((movie) => {
      console.log(movie.json());
      this.film = movie.json();
    });

    


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieReviewPage');
  }

  openReviewModal() {
    console.log(this.film['_id']);
    let dialogRef = this.dialog.open(AddReviewComponent, {
      width: '250px',
      data: { filmName: "Dark Knight", id : this.film['_id'] },
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getRattingArray(rating){

    return Array(rating).fill(0).map((x,i) => { i });
  }

}
