import { Component, Input, OnInit } from "@angular/core";
import { IPost } from "src/app/models/post";
import { PostsService } from "../../services/posts.service";
import {Observable} from 'rxjs'

@Component({
    selector: 'app-recent-posts',
    templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

    data : IPost[]  = []
    loading : boolean = true
    // @Input() data : IPost

    constructor(private postsService : PostsService) {}

    ngOnInit(): void {
        this.postsService.getRecentPosts().subscribe(posts => {
            this.data = posts
            this.loading = false
        })

    }
}