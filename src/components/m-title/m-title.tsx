import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-title',
  styleUrl: 'm-title.css',
  shadow: true,
})
export class MTitle {
  // Second, we decorate a class member with @Prop()
  @Prop() size: TitleSize;

  render() {
    return (
      <Host
        class={{
          'title-size-small': this.size == 'small',
          'title-size-medium': this.size == 'medium',
          'title-size-big': this.size == 'big',
        }}
      >
        <h1>
          <slot></slot>
        </h1>
      </Host>
    );
  }
}

export type TitleSize = 'small' | 'medium' | 'big';
