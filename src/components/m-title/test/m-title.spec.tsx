import { newSpecPage } from '@stencil/core/testing';
import { MTitle } from '../m-title';

describe('m-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MTitle],
      html: `<m-title></m-title>`,
    });
    expect(page.root).toEqualHtml(`
      <m-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </m-title>
    `);
  });
});
