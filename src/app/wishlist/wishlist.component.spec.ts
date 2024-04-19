import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FootersComponent } from '../footers/footers.component';
import { HeadersComponent } from '../headers/headers.component';

import { WishlistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistComponent,HeadersComponent,FootersComponent ],
     
 imports:[
        HttpClientModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
