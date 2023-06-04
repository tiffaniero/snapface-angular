import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
      
        { 
          id: 1,
          title: "titine",
          description: "Un truc", 
          createdDate: new Date(),
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          snaps: 150,
          location: "Toulouse"
        },
        {
          id: 2,
          title: "Michel",
          description: "Un mec sympa", 
          createdDate: new Date(),
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          snaps: 3,
          location: "Lyon"
        },
        {
          id: 3,
          title: "JACKIE",
          description: "Une chouette femme", 
          createdDate: new Date(),
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          snaps: 0
        }
      ];

    getAllFaceSnap(): FaceSnap[]{
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(faceSnap){
            return faceSnap;
        } else {
            throw new Error('Facesnap not found');
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap'? faceSnap.snaps++ : faceSnap.snaps--;
    }
}