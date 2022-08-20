import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {


  constructor(private tokenStorage: TokenStorageService,private _router:Router)
  {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      if(localStorage.getItem("TOKEN_KEY") == null || localStorage.getItem("TOKEN_KEY") == undefined)
      {
        this._router.navigateByUrl("/login");
        return false;
      }
      else{ 
        return true;
      }
  }
  
}
