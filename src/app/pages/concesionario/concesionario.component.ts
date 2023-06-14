import { Component, OnInit } from '@angular/core';
import { PostService} from 'src/app/post.service'
import { Coches } from 'src/app/post.model';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {
  Coches: Coches[] ;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe( (res) => {
      this.Coches = res.map ( (e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Coches)
        };
      });
    });

  }
  }


