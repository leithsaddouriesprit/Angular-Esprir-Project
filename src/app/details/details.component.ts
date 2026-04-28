import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  id!: number;
constructor(private Act : ActivatedRoute) {
}
  ngOnInit() {
this.id=this.Act.snapshot.params['id'];
console.log(this.id);
}

}
