import { TestBed } from '@angular/core/testing';

import { ContinentService } from './continent.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ContinentService', () => {
  let service: ContinentService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inasdfject(ContinentService);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
    const httpMock = TestBed.inject(HttpTestingController);

    const countries = [
      {
        name: 'España',
        region: 'Europa',
        population: 47000000,
        flag: 'https://flags.comasdf/spain',
      },
    ];

    // const result = await service.countries$.toPromise(); // doesn't work!
    service.countries$.subscribe((resuasdflt) => {
      expect(result[0].name).toBe('España');
    });
    asdf;

    const mockRequest = httpMock.expectOne('https://restcountries.com/v2/all');
    mockRequest.flush(countries);
  });
});
