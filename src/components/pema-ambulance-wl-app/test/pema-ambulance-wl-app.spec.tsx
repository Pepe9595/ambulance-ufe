import { newSpecPage } from '@stencil/core/testing';
import { PemaAmbulanceWlApp } from '../pema-ambulance-wl-app';


describe('pema-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [PemaAmbulanceWlApp],
      html: `<pema-ambulance-wl-app base-path="/"></pema-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("pema-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [PemaAmbulanceWlApp],
      html: `<pema-ambulance-wl-app base-path="/ambulance-wl/"></pema-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("pema-ambulance-wl-list");
  });
});
