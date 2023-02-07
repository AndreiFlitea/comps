import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  tableDesign = 'striped celled';

  data = [
    { name: 'James', age: 24, job: 'Designer', employed: 'yes'},
    { name:'Jill', age: 26, job: 'Engineer', employed: 'no'},
    { name: 'Elyse', age: 25, job: 'Engineer', employed: true},
    { name:'Andy', age: 36, job: 'Engineer', employed: true},
  ];

  headers = [    
    {key:'name', label: 'Name'},
    {key: 'age', label: 'Age'},    
    {key: 'job', label: 'Job'},
    {key: 'employed', label: 'Employed'}
  ];  
}
