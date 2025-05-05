import { Component, Input } from '@angular/core';
import { tableTemplateBase } from '../../assets/data/img-table-base64';
import { EyesCanvaComponent, ImgProps } from '../eyes-canva/eyes-canva.component';
import { TypeViews } from '../tester-hirschberg/tester-hirschberg.component';

@Component({
  selector: 'app-motilidad-canva',
  standalone: true,
  imports: [EyesCanvaComponent],
  templateUrl: './motilidad-canva.component.html',
  styleUrl: './motilidad-canva.component.css'
})
export class MotilidadCanvaComponent {

  public useBackgroundImg: boolean = true;
  public backgroundImgProps!: ImgProps;
  private view: string = TypeViews.NEW;
  @Input() canvaTitle: string = 'OD'

  public getImgBackground(): ImgProps {

    const imgTemplate = tableTemplateBase();

    return {
      base64: imgTemplate,
      width: 300,
      height: 150,
      yOffset: 0
    }


  }


}
