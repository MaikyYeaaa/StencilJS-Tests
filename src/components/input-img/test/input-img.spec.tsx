import { newSpecPage } from '@stencil/core/testing';
import { InputImg } from '../input-img';

describe('input-img', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputImg],
      html: `<input-img></input-img>`,
    });
    expect(page.root).toEqualHtml(`
      <input-img>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-img>
    `);
  });
});
