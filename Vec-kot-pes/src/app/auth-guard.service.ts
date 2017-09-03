import { Injectable }     from '@angular/core';
import { CanActivate, CanActivateChild, Router,
   ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { UporabnikService } from './uporabnik/uporabnik.service';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private userService: UporabnikService, private router: Router, private http: Http) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.canActivate(route, state);
  }

  checkLogin(url: string): Observable<boolean>{

    return this.http
    .get(`http://164.8.230.126/uporabnik/loginstatus`, { headers: this.getHeaders(), withCredentials: true})
    .map((res: Response) => {
      //this.userService.redirectUrl = url; //???
      if(res.json()==true){
        return true;
      }
      else{
        this.router.navigate(['/zacetna']);
        return false;
      }
    });
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
