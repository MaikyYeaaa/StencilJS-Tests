import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'input-img',
  styleUrl: 'input-img.css',
  shadow: true,
})
export class InputImg {
  @State() imagenURL: string = '';
  inputEl!: HTMLInputElement;

  handleCambioInput() {
    console.log('entro');
    this.imagenURL = this.inputEl.value;
  }

  render() {
    return (
      <section>
        <input ref={el => (this.inputEl = el as HTMLInputElement)} type="url" placeholder="Ingrese URL de la imagen" />
        <button onClick={() => this.handleCambioInput()}>Enviar</button>
        <image-card imagenURL={this.imagenURL}></image-card>
      </section>
    );
  }
}
