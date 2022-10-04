import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Coches} from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore: AngularFirestore) { }

  getPosts(){
    return this.angularFirestore
                .collection("Coches")
                .snapshotChanges()
  }

  getPostById(id){
    return this.angularFirestore
                .collection("Coches")
                .doc(id)
                .valueChanges()

  }

  createPost(coche: Coches){
    return new Promise<any> ((_resolve, reject) => {
      this.angularFirestore
            .collection("Coches")
            .add(coche)
            .then((response) => {
              console.log(response)
            },
            (error) => {
                reject(error)
            })
    })

  }

  updatePost(coche: Coches, id){
    return this.angularFirestore
                .collection("Coches")
                .doc(id)
                .update({
                  imagen: coche.imagen,
                  marca: coche.marca,
                  modelo: coche.modelo,
                  motor: coche.motor,
                  anyo: coche.anyo,
                  categoria: coche.categoria
                });

  }

  deletePost(coche: Coches){
    return this.angularFirestore
                .collection("Coches")
                .doc(coche.id)
                .delete()
  }



}

