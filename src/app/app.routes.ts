import { Routes } from '@angular/router';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { AppComponent } from './app.component';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

export const routes: Routes = [
    { path: 'main', component: MyButtonComponent },
    { path: 'form', component: SimpleFormComponent },
    { path: 'reactive_form', component: ReactiveFormComponent },
    { path: '', redirectTo: 'main', pathMatch: 'full'}
];
