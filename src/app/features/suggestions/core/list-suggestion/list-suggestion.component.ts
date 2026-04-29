import { Component } from '@angular/core';
import { Suggestion } from '../../../../models/suggestion';
import { SuggestionService } from '../../../../services/suggestion.service';


@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent {
searchText: string = '';


suggestions: Suggestion[] = [];

constructor(private sugS: SuggestionService) {}

ngOnInit() {this.suggestions = this.sugS.suggestions;}




products:Suggestion []= []


liky(i: number) {

  this.suggestions[i].nbLikes++;
}

ajouter(i:Suggestion){
this.products.push(i);
console.log(this.products)
}
filteredProducts() {
  const text = this.searchText.toLowerCase().trim();

  return this.suggestions.filter((suggestion: Suggestion) =>
    suggestion.title.toLowerCase().includes(this.searchText) ||
    suggestion.category.toLowerCase().includes(this.searchText)
  );

}
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
