import { AppComponent } from "./app.component"

describe('App Component', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();

  })

  it('should have angular-template', () => {
    expect(fixture.title).toEqual('angular-template')
  })

})
