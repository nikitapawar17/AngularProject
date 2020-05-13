import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


import { DebugElement} from '@angular/core';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../authentication.service';
import { MatInput } from '@angular/material/input';

describe( 'LoginComponent', () => {
    let comp: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    let usernameEl: DebugElement;
    let passwordEl: DebugElement;
    let btnEl: DebugElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoginComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                BrowserModule,
                MaterialModule,
                HttpClientTestingModule, 
                RouterTestingModule
            ],
            providers: [AuthenticationService]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(LoginComponent);

            comp = fixture.componentInstance;   // LoginComponent test instance

            de = fixture.debugElement.query(By.css('form'));

            usernameEl = fixture.debugElement.query(By.css('matInput[id=username]'));
            passwordEl = fixture.debugElement.query(By.css('matInput[id=password]'));
            btnEl = fixture.debugElement.query(By.css('matInput[id=loginButton]'));

            el = de.nativeElement;
        });
    }));

    it(`should call the login mathod`, async(() => {
            fixture.detectChanges();
            spyOn(comp, 'login');
            el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(comp.login).toHaveBeenCalled();
    }));
    
    
    // it(`form should be invalid`, async(() => {
    //     comp.loginForm.controls['email'].setValue('');
    //     comp.loginForm.controls['password'].setValue('');
    //     expect(comp.loginForm.valid).toBeFalsy();
    //   }));
    
    // it(`form should be valid`, async(() => {
    //     comp.loginForm.controls['username'].setValue('shivani');
    //     comp.loginForm.controls['password'].setValue('shivani@1234');
    //     expect(comp.loginForm.valid).toBeTruthy();
    //   }));

    it('Entering value in input controls and emit output events', () => {
        let user: any;
        usernameEl.nativeElement.value = "nikita";
        passwordEl.nativeElement.value = "nikita@1234";


        // Subscribe to the Observable and store the user in a local variable.
        comp.auth_service.login(comp.loginForm.value);
        // This sync emits the event and the subscribe callback gets executed above
        btnEl.triggerEventHandler('click', null);
        // Now we can check to make sure the emitted value is correct
        expect(user.username).toBe("nikita");
        expect(user.password).toBe("nikita@1234");
      });
    
      
});
  