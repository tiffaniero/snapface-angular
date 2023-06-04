import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonText!:string;

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
      this.buttonText = 'Snaps !';
      const faceSnapId = +this.route.snapshot.params['id'];
      this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnapp(){
    
    if (this.buttonText == 'Snaps !'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Unsnaps !'
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Snaps !';
    }
  }
}
