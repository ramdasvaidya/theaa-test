import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleService } from './title.service';

describe('Title service', () => {
  let titleService: TitleService;
  const titleValues = [
    { name: 'Mr', isDefault: false },
    { name: 'Mrs', isDefault: false },
    { name: 'Miss', isDefault: false },
    { name: '!', isDefault: false },
    { name: 'Dr', isDefault: true },
    { name: 'Prof', isDefault: false }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [TitleService]
    })
    .compileComponents();

    titleService = TestBed.inject(TitleService);
  });

  it('Service created', () => {
    expect(titleService).toBeDefined();
  });

  it('#getTiles should return value from observable',
    (done: DoneFn) => {
      titleService.getTitles().subscribe(value => {
      expect(value).toEqual(titleValues);
      done();
    });
  });

})