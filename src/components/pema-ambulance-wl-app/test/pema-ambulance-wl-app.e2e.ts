import { newE2EPage } from '@stencil/core/testing';

describe('pema-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pema-ambulance-wl-app></pema-ambulance-wl-app>');

    const element = await page.find('pema-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
