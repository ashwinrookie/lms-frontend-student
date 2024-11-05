import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { exploreCoursesResolver } from './explore-courses.resolver';

describe('exploreCoursesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => exploreCoursesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
