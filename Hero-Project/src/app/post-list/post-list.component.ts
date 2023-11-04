import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  ngOnInit() {
    this.route.queryParamMap.subscribe(value =>{
      const page = value.get('page');
      const order = value.get('orderBy');  
      console.log(page);
      console.log(order);
    });
  }

  posts=[
    {
      id:1,
      title: "Title 1",
      content: "content 1"
    },
    {
      id:2,
      title: "Title 2",
      content: "content 2"
    },
    {
      id:3,
      title: "Title 3",
      content: "content 3"
    },
    {
      id:4,
      title: "Title 4",
      content: "content 4"
    },    {
      id:5,
      title: "Title 5",
      content: "content 5"
    }
  ];
}
