import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'image-card',
  styleUrl: 'image-card.css',
  shadow: true,
})
export class ImageCard {
  @Prop() imagenURL: string = '';

  render() {
    return <article class="card">{this.imagenURL ? <img src={this.imagenURL} /> : <p>no imagen</p>}</article>;
  }
}
