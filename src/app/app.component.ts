import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MyButtonComponent } from './components/my-button/my-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang-test-app';
}
