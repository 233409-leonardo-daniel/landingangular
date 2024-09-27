import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cardalbum',
  standalone: true,
  imports: [],
  templateUrl: './cardalbum.component.html',
  styleUrl: './cardalbum.component.css'
})
export class CardalbumComponent {
  @Input() album= {
    picture:''    
  }
}
