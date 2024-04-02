import { newE2EPage } from '@stencil/core/testing';

describe('pema-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pema-ambulance-wl-editor></pema-ambulance-wl-editor>');

    const element = await page.find('pema-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
