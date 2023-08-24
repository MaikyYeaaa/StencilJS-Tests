import { newE2EPage } from '@stencil/core/testing';

describe('m-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<m-title></m-title>');

    const element = await page.find('m-title');
    expect(element).toHaveClass('hydrated');
  });
});
