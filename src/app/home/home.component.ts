import { Component } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

pricemax: number | null = null;
color: string = 'red';
searchText: string = '';

  cinfo1: string = 'hello 1CINFO1';
products: Product[]= [
  { id: 1, name: 'Pomme',description: 'product description 1', price: 10, nbrlike: 0, quantity: 1 },
  { id: 2, name: 'Poire', description: 'product description 2', price: 20, nbrlike: 0, quantity: 50 },
  { id: 3, name: 'Mandarine', description: 'product description 3', price: 30, nbrlike: 0, quantity: 50 }
]


save() {
  alert('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
}

increment(i: number) {

  this.products[i].nbrlike++;
}

buy(i: number) {
  if (this.products[i].quantity > 0) {
this.products[i].quantity--;} 
else {
  alert('Product is out of stock!');}

}


filteredProducts() {
  const text = this.searchText.toLowerCase().trim();

  return this.products.filter((product: Product) =>
    product.name.toLowerCase().includes(text) ||
    product.description.toLowerCase().includes(text)
  );
}
} 


