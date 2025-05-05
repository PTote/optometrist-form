import { Component } from '@angular/core';
import { eyesFirstTemplateBase } from '../../assets/data/imgs-base64';
import { EyesCanvaComponent, ImgProps } from "../eyes-canva/eyes-canva.component";
import { TypeViews } from '../tester-hirschberg/tester-hirschberg.component';

@Component({
  selector: 'app-cover-test',
  standalone: true,
  imports: [EyesCanvaComponent],
  templateUrl: './cover-test.component.html',
  styleUrl: './cover-test.component.css'
})
export class CoverTestComponent {

  public useBackgroundImg: boolean = true;
  public backgroundImgProps!: ImgProps;
  private view: string = TypeViews.NEW;
  public canvaTitle: string = 'cover test'


  public getImgBackground(): ImgProps {

    const imgTemplate = eyesFirstTemplateBase();

    return {
      base64: imgTemplate,
    }


  }


}
