import { Component, OnInit } from '@angular/core';
import { PostService} from 'src/app/post.service'
import { Coches } from 'src/app/post.model';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Coches: Coches[] ;
  public page!: number;


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

deleteCar = ( Coches) => this.postService.deletePost(Coches);







}
