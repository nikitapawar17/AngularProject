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

export interface TokenPayload1{
    new_pswd: string,
    confirm_pswd: string

}

@Injectable()
export class AuthenticationService{
    private token: string
    private reset_token: string

    constructor(private http:HttpClient, private router:Router, public route: ActivatedRoute) {}

    private getToken(): string {
        if(!this.token)
        {
            this.token = localStorage.getItem('token')
        }
        return this.token
    }

    public getUserDetails(): UserDetails {
        const token = localStorage.getItem('token')
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
        const endpoint_url = "users/register/"
        return this.http.post(environment.base_url + endpoint_url, user)
    }

    public login(user : TokenPayload): Observable<any> { 
        const endpoint_url = "users/login/"
        return this.http.post(environment.base_url + endpoint_url, user)
        .pipe(map(user_data =>{
            if (user_data && user_data["data"])
            {
                console.log(user_data["data"][0]["token"])
                localStorage.setItem('currentUser', user_data["data"][0]["token"])
            }
            return user_data;
        }));
    }

    public logout(): void{
        this.token = ''
        window.localStorage.removeItem('token')
        this.router.navigateByUrl('/')
    }

    public forgot_password(user : TokenPayload): Observable<any> {
        const endpoint_url = "forgot_password/"
        return this.http.post(environment.base_url + endpoint_url, user)
    }


    public reset_password(user1 : TokenPayload1): Observable<any> {
        const endpoint_url = "reset_password/"
        const auth_token = localStorage.getItem("access_token")
        console.log(auth_token, "------->")
        return this.http.post(environment.base_url + endpoint_url + auth_token, user1)
    }
} 