import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatDividerModule,
  MatTabsModule,
  MatStepperModule,
  MatIconModule,
  MatTreeModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './about/career/career.component';
import { HobbiesComponent } from './about/hobbies/hobbies.component';
import { GoalsComponent } from './about/goals/goals.component';
import { OnlineComponent } from './contact/online/online.component';
import { PhysicalComponent } from './contact/physical/physical.component';
import { FormComponent } from './contact/form/form.component';
import { ProfessionalComponent } from './projects/professional/professional.component';
import { PersonalComponent } from './projects/personal/personal.component';
import { TreeComponent } from './about/hobbies/tree/tree.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SideNavContentComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    CareerComponent,
    HobbiesComponent,
    GoalsComponent,
    OnlineComponent,
    PhysicalComponent,
    FormComponent,
    ProfessionalComponent,
    PersonalComponent,
    TreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule,
    MatStepperModule,
    MatIconModule,
    MatTreeModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
