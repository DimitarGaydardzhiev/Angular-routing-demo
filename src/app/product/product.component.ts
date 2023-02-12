import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user/user.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  public productId: number = 0;
  public user: User = new User();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      // Get prouct from server, based on the ID
    });

    this.user = this.route.snapshot.data['user'];
    console.log(this.user);
  }
}
