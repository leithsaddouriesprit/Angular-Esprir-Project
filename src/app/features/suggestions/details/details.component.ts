import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuggestionService } from '../../../services/suggestion.service';
import { Suggestion } from '../../../models/suggestion';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  id!: number;
  suggestion!: Suggestion;
constructor(private Act : ActivatedRoute, private sugS: SuggestionService) {
}
  ngOnInit() {
this.id=this.Act.snapshot.params['id'];
//this.suggestion=this.sugS.suggestions.find(sug=>sug.id==this.id)!;
this.suggestion=this.sugS.suggestions.find(s=>s.id==this.id)!;
}

}
