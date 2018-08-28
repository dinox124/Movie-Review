import { NgModule } from '@angular/core';
import { AddReviewComponent } from './add-review/add-review';
import {IonicModule} from 'ionic-angular';

import { MatDialogModule,MatInputModule,MatButtonModule } from '@angular/material';

@NgModule({
	declarations: [AddReviewComponent],
	imports: [
		IonicModule,
		MatDialogModule,
		MatInputModule,
		MatButtonModule
	],
	exports: [AddReviewComponent]
})
export class ComponentsModule {}
