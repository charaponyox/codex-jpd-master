import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { MenuSidebarComponent } from './main/menu-sidebar/menu-sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UsersComponent } from './pages/users/users.component';
import { AuthorizationService } from '../app/utils/services/authorization.service';
import { ErrorComponent } from './error/error.component';
import { JwtModule } from '@auth0/angular-jwt';
import { UsersUpdateComponent } from './pages/users/users-update/users-update.component';
import { UsersAddComponent } from './pages/users/users-add/users-add.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { environment } from '../environments/environment';
import { BaseDeDonnesComponent } from './base-de-donnes/base-de-donnes.component';
import { EntreprisesAddComponent } from './base-de-donnes/entreprises-add/entreprises-add.component';
import { EntreprisesListComponent } from './base-de-donnes/entreprises-list/entreprises-list.component';
import { EntreprisesUpdateComponent } from './base-de-donnes/entreprises-update/entreprises-update.component';
import { EntreprisesEditComponent } from './base-de-donnes/entreprises-edit/entreprises-edit.component';

const apiUrl = environment.apiUrl;  

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    UsersComponent,
    ErrorComponent,
    UsersUpdateComponent,
    UsersAddComponent,
    UsersListComponent,
    BaseDeDonnesComponent,
    EntreprisesAddComponent,
    EntreprisesListComponent,
    EntreprisesUpdateComponent,
    EntreprisesEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1100,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }) , 
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('token');},
        whitelistedDomains: ['031d3fdc.ngrok.io'],
        blacklistedRoutes: ['031d3fdc.ngrok.io/auth/login']
      }
    })
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
