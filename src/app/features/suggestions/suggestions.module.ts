import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggestionComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }
