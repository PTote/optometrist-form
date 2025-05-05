import { Component } from '@angular/core';
import { base64BackEyesTemplate } from '../../assets/data/img-back-eyes';
import { EyesCanvaComponent, ImgProps } from "../eyes-canva/eyes-canva.component";
import { TypeViews } from '../tester-hirschberg/tester-hirschberg.component';

@Component({
  selector: 'app-back-eye-test',
  standalone: true,
  imports: [EyesCanvaComponent],
  templateUrl: './back-eye-test.component.html',
  styleUrl: './back-eye-test.component.css'
})
export class BackEyeTestComponent {

    public useBackgroundImg: boolean = true;
    public backgroundImgProps!: ImgProps;
    private view: string = TypeViews.NEW;
    public canvaTitle: string = 'Fondo de ojo';


    public getImgBackground(): ImgProps {

      const imgTemplate = base64BackEyesTemplate();

      return {
        base64: imgTemplate,
      }


    }


}
