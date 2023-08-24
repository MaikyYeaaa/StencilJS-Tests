import { Component, Host, h, Prop } from '@stencil/core';
import { TitleSize } from '../m-title/m-title';

@Component({
  tag: 'm-card',
  styleUrl: 'm-card.css',
  shadow: true,
})
export class MCard {
  @Prop() titleSize: TitleSize;

  render() {
    return (
      <Host>
        <m-title size={this.titleSize}>MyTitleCard</m-title>
        <p>
          <slot></slot>
        </p>
      </Host>
    );
  }
}
