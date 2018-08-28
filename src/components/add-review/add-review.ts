import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Http } from "@angular/http";
/**
 * Generated class for the AddReviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-review',
  templateUrl: 'add-review.html'
})
export class AddReviewComponent {

  text: string;
  rating = 1;
  constructor(public dialogRef: MatDialogRef<AddReviewComponent>, private http: Http, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('Hello AddReviewComponent Component');
    this.text = 'Hello World';
    console.log(this.data);
  }

  addRating(rating) {
    this.rating = rating;
  }

  getRating(platform, index) {
    if (this.rating >= index) {
      if (platform == 'ios') {
        return 'ios-star';
      }

      if (platform == 'android') {
        return 'md-star';
      }
    } else {
      if (platform == 'ios') {
        return 'ios-star-outline';
      }

      if (platform == 'android') {
        return 'md-star-outline';
      }
    }
  }


  dismiss() {
    this.dialogRef.close();
  }

  submitReview() {
    console.log(this.rating);
    console.log(this.text);
    console.log(this.data.id);
   

    this.http.put(`https://ionicmoviereviewapp.herokuapp.com/add-review/${this.data.id}`,{
      message : this.text,
      rating : this.rating
    }).toPromise().then((response) => {
      this.dialogRef.close();
    },(err) => {
      console.log(err)
    });
  }

}
