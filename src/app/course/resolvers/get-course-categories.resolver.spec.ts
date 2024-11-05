import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getCourseCategoriesResolver } from './get-course-categories.resolver';

describe('getCourseCategoriesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getCourseCategoriesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
