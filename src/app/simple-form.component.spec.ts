import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SimpleFormComponent } from './simple-form.component';
import { TitleService } from './title.service';

describe('SimpleFormComponent', () => {
  let component: SimpleFormComponent;
  let fixture: ComponentFixture<SimpleFormComponent>;
  let titleService: TitleService;
  const titleValues = [
    { name: 'Mr', isDefault: false },
    { name: 'Mrs', isDefault: false },
    { name: 'Miss', isDefault: false },
    { name: '!', isDefault: false },
    { name: 'Dr', isDefault: true },
    { name: 'Prof', isDefault: false }
  ];

  const formValues =  { 
    filter: 'Mr', 
    firstName: 'Ram',
    lastName: 'Vaidya', 
    acceptterms: true,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleFormComponent ],
      imports: [ FormsModule ],
      providers: [TitleService]
    })
    .compileComponents();

    titleService = TestBed.inject(TitleService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(SimpleFormComponent).toBeTruthy();
  });


  describe('Getting the titles', () => {
    it('Getting the titles from observable',
      (done: DoneFn) => {
        titleService.getTitles().subscribe(value => {
        expect(value).toEqual(titleValues);
        done();
      });
    });
  });


});
