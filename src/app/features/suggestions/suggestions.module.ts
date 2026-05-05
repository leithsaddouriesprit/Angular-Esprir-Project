import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { DetailsComponent } from './details/details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggestionComponent,
    DetailsComponent,
    SuggestionFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SuggestionsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SuggestionsModule { }
