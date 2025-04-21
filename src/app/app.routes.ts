import { Routes } from '@angular/router';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { AppComponent } from './app.component';
import { MyButtonComponent } from './components/my-button/my-button.component';

export const routes: Routes = [
    { path: 'main', component: MyButtonComponent },
    { path: 'form', component: SimpleFormComponent },
    { path: '', redirectTo: 'main', pathMatch: 'full'}
];
