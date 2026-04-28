import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';    
import { Suggestion } from '../../models/suggestion';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { not } from 'rxjs/internal/util/not';
import { NotfoundComponent } from '../../notfound/notfound.component';
import { PageAcueillComponent } from '../../page-acueill/page-acueill.component';
import { DetailsComponent } from './details/details.component';




const routes: Routes = [
{path: 'products', component: HomeComponent},
{path: 'accueil', component: PageAcueillComponent},
{path: '', redirectTo: '/accueil', pathMatch: 'full'},
///{path: 'suggestions', component: ListSuggestionComponent}, 
{path: 'suggestions/details/:id', component: DetailsComponent},
{ path: 'suggestions', loadChildren: () => import('./suggestions.module').then(m => m.SuggestionsModule) },
{ path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) },
{path: '**', component: NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
