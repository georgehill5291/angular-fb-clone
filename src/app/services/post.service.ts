import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from 'rxjs';
import * as firebase from 'firebase/compat';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // currentUser: User


  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('http://georgedev.net/api/news', {
      headers: {},
    }).pipe(
      map((response : any) => {
        return response.news.docs;
      }
    ));
  }

  // constructor(private afs: AngularFireStorage,
  //             private afAuth: AngularFireAuth) {

  //   this.afAuth.authState.subscribe(user => this.currentUser == user);
  // }

  // getAllPosts(): Observable<any> {
  //   return this.afs.collection<any>('posts', ref => ref.orderBy('time', 'desc'))
  //     .snapshotChanges()
  //     .pipe(
  //       map(actions => {
  //         return actions.map(item => {
  //           return {
  //             id: item.payload.doc.id,
  //             ...item.payload.doc.data(),
  //           };
  //         });
  //       })
  //     );
  // }

  // postMessage(message: string, ownerName: string, otherItem): void {
  //   this.afs.collection('posts').add({
  //     message,
  //     title: ownerName,
  //     user_id: this.currentUser.uid,
  //     time: firebase.firestore.FieldValue.serverTimestamp(),
  //     ...otherItem
  //   }).then(res => console.log(res));
  // }
}
