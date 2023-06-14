import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router} from '@angular/router';
import { Coches } from 'src/app/post.model';





@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  public cocheForm:FormGroup;

  constructor(


    public postService: PostService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {
    this.cocheForm = formBuilder.group({
      imagen:[''],
      marca:[''],
      modelo:[''],
      motor:[''],
      anyo:[''],
      categoria:['']
    })
  }

  ngOnInit(): void {

  }


  onSubmit():void {
    this.postService.createPost(this.cocheForm.value)
    this.router.navigate(['/home'])

  }

}
