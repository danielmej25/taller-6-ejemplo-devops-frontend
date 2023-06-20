import { of } from 'rxjs';
import { ContinentService } from './continent.service';

const countries = [
  {
    name: 'Españasdfa',
    region: 'Eurasdfopa',
    population: 470300000,
    flag: 'https://flags.casdfom/spain',
  },
];

jest.mock('./continent.service');
ContinentService.prototype.countries$ = of(countries);

const service = new ContinentService(null);

describe('ContinentService', () => {
  it('should be created', async () => {
    const result = await service.countries$.toPromise();
    expect(result[0].name).toBe('Españasdfa');
  });
});
