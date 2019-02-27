import { TestBed } from '@angular/core/testing';

import { AboutusresolverService } from './aboutusresolver.service';

describe('AboutusresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutusresolverService = TestBed.get(AboutusresolverService);
    expect(service).toBeTruthy();
  });
});
