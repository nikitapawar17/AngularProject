import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


import { DebugElement} from '@angular/core';
import { MaterialModule } from '../material.module';
import { RegisterComponent } from './register.component';
import { AuthenticationService } from '../authentication.service';

describe( 'RegisterComponent', () => {
    let comp: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RegisterComponent
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
            fixture = TestBed.createComponent(RegisterComponent);

            comp = fixture.componentInstance;   // RegisterComponent test instance

            de = fixture.debugElement.query(By.css('form'));
            el = de.nativeElement;
        });
    }));

    it(`should call the register mathod`, async(() => {
            fixture.detectChanges();
            spyOn(comp, 'register');
            el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(comp.register).toHaveBeenCalled();
    }));
    
    
    it(`form should be invalid`, async(() => {
        comp.registerForm.controls['first_name'].setValue('');
        comp.registerForm.controls['last_name'].setValue('');
        comp.registerForm.controls['username'].setValue('');
        comp.registerForm.controls['email'].setValue('');
        comp.registerForm.controls['password'].setValue('');
        expect(comp.registerForm.valid).toBeFalsy();
      }));
    
      it(`form should be valid`, async(() => {
        comp.registerForm.controls['first_name'].setValue('shivani');
        comp.registerForm.controls['last_name'].setValue('rohane');
        comp.registerForm.controls['username'].setValue('shivani');
        comp.registerForm.controls['email'].setValue('shivani@gmail.com');
        comp.registerForm.controls['password'].setValue('shivani@1234');
        expect(comp.registerForm.valid).toBeTruthy();
      }));
    
});
  