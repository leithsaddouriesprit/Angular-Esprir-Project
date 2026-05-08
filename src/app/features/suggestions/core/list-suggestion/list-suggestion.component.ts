import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../../../models/suggestion';
import { SuggestionService } from '../../../../services/suggestion.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent implements OnInit {
  searchText: string = '';

  suggestions: Suggestion[] = [];
  products: Suggestion[] = [];

  constructor(private sugS: SuggestionService) {}

  ngOnInit() {
    this.suggestions = this.sugS.getSuggestions();
  }

  liky(i: number) {
    this.suggestions[i].nbLikes++;
  }

  ajouter(i: Suggestion) {
    this.products.push(i);
    console.log(this.products);
  }

  filteredProducts() {
    const text = this.searchText.toLowerCase().trim();

    return this.suggestions.filter((suggestion: Suggestion) =>
      suggestion.title.toLowerCase().includes(text) ||
      suggestion.category.toLowerCase().includes(text)
    );
  }
}