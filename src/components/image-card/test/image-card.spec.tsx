import { newSpecPage } from '@stencil/core/testing';
import { ImageCard } from '../image-card';

describe('image-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ImageCard],
      html: `<image-card></image-card>`,
    });
    expect(page.root).toEqualHtml(`
      <image-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </image-card>
    `);
  });
});
