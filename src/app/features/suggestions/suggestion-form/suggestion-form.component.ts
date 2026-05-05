import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuggestionService } from '../../../services/suggestion.service';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent {

constructor(
  private suggestionService: SuggestionService,
  private router: Router
) {}
categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

form = new FormGroup({
  Titre: new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.pattern('^[A-Z][a-zA-Z ]*$')
  ]),
  Description: new FormControl('', [
    Validators.required,
    Validators.minLength(30)
  ]),
  Categorie: new FormControl('', [
    Validators.required
  ]),
  Date: new FormControl(new Date().toLocaleDateString()),
  Status: new FormControl('en attente')
});

onSubmit() {
  if (this.form.invalid) {
    return;
  }

 const newSuggestion: Suggestion = {
  id: this.suggestionService.getNextId(),
  title: this.form.value.Titre!,
  description: this.form.value.Description!,
  category: this.form.value.Categorie!,
  date: new Date(),
  status: 'en_attente',
  nbLikes: 0
};

this.suggestionService.addSuggestion(newSuggestion);
this.router.navigate(['/suggestions']);

  
}
}
