import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { eyesFirstTemplateBase } from '../../assets/data/imgs-base64';
import { EyesCanvaComponent, ImgProps } from "../eyes-canva/eyes-canva.component";


export enum TypeViews{
  NEW = 'new',
  UPDATE = 'update'
}

@Component({
  selector: 'app-tester-hirschberg',
  standalone: true,
  imports: [EyesCanvaComponent],
  templateUrl: './tester-hirschberg.component.html',
  styleUrl: './tester-hirschberg.component.css'
})
export class TesterHirschbergComponent implements OnInit {

  @ViewChild('canvas') private canvas!: ElementRef;
  private signaturePad!: SignaturePad;

  public useBackgroundImg: boolean = true;
  public backgroundImgProps!: ImgProps;
  private view: string = TypeViews.NEW;
  public canvaTitle: string = 'test de hirschberg'


  ngOnInit(): void {
    console.log(this.canvas);
  }


  public getImgBackground(): ImgProps{

    const imgTemplate = eyesFirstTemplateBase();

    return{
      base64: imgTemplate,
    }


  }




}
