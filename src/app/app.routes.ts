import { Routes } from '@angular/router';
import { EntitiesComponent } from './entities/entities.component';
import { EntityTreeComponent } from './entity-tree/entity-tree.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { ConfigurationComponent } from './configuration/configuration.component';

export const routes: Routes = [
  { path: '', redirectTo: '/entities', pathMatch: 'full' },
  { path: 'entities', component: EntitiesComponent },
  { path: 'entity-tree', component: EntityTreeComponent },
  { path: 'create-report', component: CreateReportComponent },
  { path: 'configuration', component: ConfigurationComponent }
]; 