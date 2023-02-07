import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  visible = false;

  toggleVisibility() {
    this.visible = !this.visible;
  }

  accordion = [
    {
      title: 'What is a dog?',
      content:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness.',
    },
    {
      title: 'What kinds of dogs are there?',
      content:
        'There are many breeds of dogs. Each breed varies in size and temperament.',
    },
    {
      title: 'How do you acquire a dog?',
      content:
        'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.',
    },
  ];
}
