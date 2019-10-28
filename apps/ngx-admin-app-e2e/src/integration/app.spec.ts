import { getGreeting } from '../support/app.po';

describe('ngx-admin-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ngx-admin-app!');
  });
});
