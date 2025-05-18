import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ManageComponent } from './manage/manage.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TasksComponent } from './tasks/tasks.component';
import { TaskActionsComponent } from './task-actions/task-actions.component';

export const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "login", component: LoginComponent},
    {path: "welcome/:name", component: WelcomeComponent, canActivate: [RouteGuardService]},
    {path: "manage", component: ManageComponent, canActivate: [RouteGuardService]},
    {path: "tasks", component: TasksComponent, canActivate: [RouteGuardService]},
    {path: "task-actions/:id", component: TaskActionsComponent, canActivate: [RouteGuardService]},
    {path: "logout", component: LogoutComponent, canActivate: [RouteGuardService]},

    {path: "**", component: ErrorComponent}
];
