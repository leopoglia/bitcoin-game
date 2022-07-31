import { FasesModule } from './fases.module';

describe('FasesModule', () => {
  let fasesModule: FasesModule;

  beforeEach(() => {
    fasesModule = new FasesModule();
  });

  it('should create an instance', () => {
    expect(fasesModule).toBeTruthy();
  });
});
