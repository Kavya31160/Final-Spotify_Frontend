import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FootersComponent } from '../footers/footers.component';
import { HeadersComponent } from '../headers/headers.component';

import { MusicComponent } from './music.component';

describe('MusicComponent', () => {
  let component: MusicComponent;
  let fixture: ComponentFixture<MusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicComponent,HeadersComponent,FootersComponent ],
 imports:[
        HttpClientModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
