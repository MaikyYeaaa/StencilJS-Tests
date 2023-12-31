/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TitleSize } from "./components/m-title/m-title";
import { TitleSize as TitleSize1 } from "./components/m-title/m-title";
export { TitleSize } from "./components/m-title/m-title";
export { TitleSize as TitleSize1 } from "./components/m-title/m-title";
export namespace Components {
    interface ImageCard {
        "imagenURL": string;
    }
    interface InputImg {
    }
    interface MCard {
        "titleSize": TitleSize;
    }
    interface MTitle {
        "size": TitleSize1;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLImageCardElement extends Components.ImageCard, HTMLStencilElement {
    }
    var HTMLImageCardElement: {
        prototype: HTMLImageCardElement;
        new (): HTMLImageCardElement;
    };
    interface HTMLInputImgElement extends Components.InputImg, HTMLStencilElement {
    }
    var HTMLInputImgElement: {
        prototype: HTMLInputImgElement;
        new (): HTMLInputImgElement;
    };
    interface HTMLMCardElement extends Components.MCard, HTMLStencilElement {
    }
    var HTMLMCardElement: {
        prototype: HTMLMCardElement;
        new (): HTMLMCardElement;
    };
    interface HTMLMTitleElement extends Components.MTitle, HTMLStencilElement {
    }
    var HTMLMTitleElement: {
        prototype: HTMLMTitleElement;
        new (): HTMLMTitleElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "image-card": HTMLImageCardElement;
        "input-img": HTMLInputImgElement;
        "m-card": HTMLMCardElement;
        "m-title": HTMLMTitleElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ImageCard {
        "imagenURL"?: string;
    }
    interface InputImg {
    }
    interface MCard {
        "titleSize"?: TitleSize;
    }
    interface MTitle {
        "size"?: TitleSize1;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "image-card": ImageCard;
        "input-img": InputImg;
        "m-card": MCard;
        "m-title": MTitle;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "image-card": LocalJSX.ImageCard & JSXBase.HTMLAttributes<HTMLImageCardElement>;
            "input-img": LocalJSX.InputImg & JSXBase.HTMLAttributes<HTMLInputImgElement>;
            "m-card": LocalJSX.MCard & JSXBase.HTMLAttributes<HTMLMCardElement>;
            "m-title": LocalJSX.MTitle & JSXBase.HTMLAttributes<HTMLMTitleElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
