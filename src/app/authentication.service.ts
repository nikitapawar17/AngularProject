import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'

export interface UserDetails {
    id: number;
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    password: string
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
    password: string
}

@Injectable()
export class AuthenticationService{
    private token: string

    constructor(private http:HttpClient, private router:Router) {}

    private saveToken(token: string) :void{
        localStorage.setItem('usertoken', token)
        this.token = token
    }

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
        const base = this.http.post('http://127.0.0.1:8000/users/register/', user)

        const request = base.pipe(
            map((data: TokenResponse) => {
                if (data.token) {
                    this.saveToken(data.token)
                }
                return data 
            })
        )
        return request
    }

    public login(user : TokenPayload): Observable<any> {
        const base = this.http.post('http://127.0.0.1:8000/users/login/', user)

        const request = base.pipe(
            map((data: TokenResponse) => {
                if (data.token) {
                    this.saveToken(data.token)
                }
                return data 
            })
        )
        return request
    }

    public profile(user : TokenPayload): Observable<any> {
        return this.http.get('http://127.0.0.1:8000/user_details/', {
            headers: { Authorization: `${this.getToken()}` }
        })
    }

    public logout(): void{
        this.token = ''
        window.localStorage.removeItem('usertoken')
        this.router.navigateByUrl('/')
    }


    public forgot_password(user : TokenPayload): Observable<any> {
        console.log(user)
        const base = this.http.post('http://127.0.0.1:8000/forgot_password/', user)

        const request = base.pipe(
            map((data: TokenResponse) => {
                if (data.token) {
                    this.saveToken(data.token)
                }
                return data 
            })
        )
        return request
    }


    public reset_password(user : TokenPayload): Observable<any> {
        console.log(user)
        const base = this.http.post('http://127.0.0.1:8000/reset_password/', user)

        const request = base.pipe(
            map((data: TokenResponse) => {
                if (data.token) {
                    this.saveToken(data.token)
                }
                return data 
            })
        )
        return request
    }

}