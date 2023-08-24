import { newE2EPage } from '@stencil/core/testing';

describe('input-img', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-img></input-img>');

    const element = await page.find('input-img');
    expect(element).toHaveClass('hydrated');
  });
});
