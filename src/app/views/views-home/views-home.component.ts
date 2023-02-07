import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  statistics = [
    { value: 100, label: 'FAVES'},
    { value: 40521, label: 'VIEWS'},
    {value: 22, label: 'MEMBERS'}
  ]

  itemsList = [
    {image: '/comps/src/assets/umbrella.png', header: 'Umbrella', description: 'bla bla bla', more: 'details'},
    {image: '/comps/src/assets/umbrella2.png', header: 'Another Umbrella', description: 'bla bla bla again', more: 'more details'}
  ]
}
