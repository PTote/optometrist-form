import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';


export interface ImgProps {
  base64?: string;
  ratio?: number;
  width?: number;
  height?: number;
  xOffset?: number;
  yOffset?: number;
};

@Component({
  selector: 'app-eyes-canva',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './eyes-canva.component.html',
  styleUrl: './eyes-canva.component.css'
})
export class EyesCanvaComponent {

  @ViewChild('canvas') private canvas!: ElementRef;
  private signaturePad!: SignaturePad;

  @Input() useBackgroundImg: boolean = false;
  @Input() backgroundImgProps!: ImgProps;
  @Input() canvasTitle: string | null = null;
  @Input() canvasClassAndId: string = '';
  @Input() useDifferentSize: boolean = false;

  ngAfterViewInit(): void {
    this.signaturePadHandler();
  }

  private signaturePadHandler(): void {
    const canvas = document.getElementById(this.canvasClassAndId) as HTMLCanvasElement;

    if (!canvas) return;

    this.signaturePad = new SignaturePad(canvas, {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      penColor: 'rgb(0, 0, 0)'
    })

    if (this.useBackgroundImg) {
      this.loadBackgroundImg();
    }


  }

  private loadBackgroundImg() {

    const {
      base64 = ''
    } = this.backgroundImgProps ?? {}

    const props: ImgProps = {
      ratio: this.backgroundImgProps?.ratio ?? 1,
      xOffset: this.backgroundImgProps?.xOffset ?? 0,
      yOffset: this.backgroundImgProps?.yOffset ?? 15
    };

    if(this.useDifferentSize){
      props['width'] = this.backgroundImgProps?.width ?? 400;
      props['height'] = this.backgroundImgProps?.height ?? 200;
    }

    console.log(props);

    this.signaturePad.fromDataURL(base64, props);
  }


  public clearPad(): void {
    this.signaturePad.clear();
    this.loadBackgroundImg();
  }

  public saveSignaturePNG(): void {
    const signatureImage = this.canvas.nativeElement.toDataURL();
    const a = document.createElement('a');
    a.href = signatureImage;
    a.download = 'signature.png'
    a.click();
  }

}
