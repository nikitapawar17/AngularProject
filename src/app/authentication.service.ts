import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {map} from 'rxjs/operators'
import {Router, ActivatedRoute} from '@angular/router'
import { environment } from '../environments/environment'


export interface UserDetails {
    id: number;
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    password: string,
    confirm_password: string,

    token_value : string,
    token_value1: string
}

interface TokenResponse{
    token:string
}

export interface TokenPayload{
    id: number;
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    password: string, 
    confirm_password: string,

    token_value : string,
    token_value1: string
}

@Injectable()
export class AuthenticationService{
    private token: string
    private reset_token: string

    constructor(private http:HttpClient, private router:Router, public route: ActivatedRoute) {}

    private getToken(): string {
        if(!this.token)
        {
            this.token = localStorage.getItem('usertoken')
        }
        return this.token
    }

    public getUserDetails(): UserDetails {
        const token = this.getToken()
        let payload 
        if (token)
        {
            payload = token.split('.')[1]
            payload = window.atob(payload)
            return JSON.parse(payload)
        } else{
            return null
        }
    }

    public isLoggedIn(): boolean {
        const user = this.getUserDetails()
        if (user) {
          return true
        } else {
          return false
        }
      }

    public register(user : TokenPayload): Observable<any> {

        return this.http.post(environment.base_url + "users/register/", user)
    }

    public login(user : TokenPayload): Observable<any> { 
        return this.http.post(environment.base_url + "users/login/", user)
    }

    public profile(user : TokenPayload): Observable<any> {
        return this.http.get(environment.base_url + "user_details/")
    }

    public logout(): void{
        this.token = ''
        window.localStorage.removeItem('usertoken')
        this.router.navigateByUrl('/')
    }

    public forgot_password(user : TokenPayload): Observable<any> {
        return this.http.post(environment.base_url + "forgot_password/", user)
    }


    public reset_password(user : TokenPayload): Observable<any> {
        // const token_value = url_obj.route.snapshot.paramMap.get('token')
        // console.log(token_value)
        // this.reset_token = this.reset_pswd_comp.reset_token_value
        //  console.log("RESET PASSWORD", this.reset_token)

        const base = this.http.post(environment.base_url + "reset_password/", user)
        return this.http.post(environment.base_url + "reset_password/", user)
    }
} 