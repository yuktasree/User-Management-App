import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { HardcodeAuthService } from './hardcode-auth.service';

@Injectable({
  providedIn: 'root'
})

export class RouteGuardService implements CanActivate {

  constructor(private hardcodeAuth: HardcodeAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.hardcodeAuth.isLoggedIn())
      return true;
    else
      return false;
  }

}
