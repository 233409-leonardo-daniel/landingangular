import { Component } from '@angular/core';
import { CardalbumComponent } from '../cardalbum/cardalbum.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CardalbumComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  albums =[{ picture: 'assets/album1.png', },
    { picture: 'assets/album2.png', },
    { picture: 'assets/album3.png', },
    { picture: 'assets/album4.png', },
    { picture: 'assets/album5.png', },]
}
