import { newE2EPage } from '@stencil/core/testing';

describe('m-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<m-card></m-card>');

    const element = await page.find('m-card');
    expect(element).toHaveClass('hydrated');
  });
});
