import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FootersComponent } from '../footers/footers.component';
import { HeadersComponent } from '../headers/headers.component';

import { LoginComponent } from './login.component';
import{Component} from '@angular/core'

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent,HeadersComponent,FootersComponent,NgModule ],
     

      
      imports:[
        HttpClientModule
      ]
  
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
