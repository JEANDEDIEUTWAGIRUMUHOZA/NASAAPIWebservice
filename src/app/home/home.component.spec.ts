import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PICTUREService } from '../picture.service';
import { of } from 'rxjs';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>
  let element;
  // simuler la réponse de la méthode: donner un retour null
  const ps = jasmine.createSpyObj('PICTUREService', {
    'getPictureOfToday': of({
      title: 'TestTitle', explanation: 'testExplanation', date: 'testDate', url: 'TestURL'
    })
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: PICTUREService, useValue: ps }],
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid url', () => {

    const image = element.querySelector('.test');
    expect(image).toBeDefined('the picture should be shown!');
    expect(image.src).toBe('http://localhost:9876/TestURL', 'Url should be valid!');

  });

  it('should show a title', () => {

    const title = element.querySelector('.mb-5');
    expect(title).toBeDefined('A title should be shown!');
    expect(title.textContent).toContain('TestTitle', 'TestTitle should be shown!');
  });


});
