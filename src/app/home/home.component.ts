import { Component } from '@angular/core';
import numbro from "numbro";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
 
  number_input=0;
  formatAgr={
    thousandSeparated: true,
    mantissa: 4
  }
  constructor(){
    this.setNumbroLocale("zh-CN")
    console.log("🚀 ~ file: home.component.ts:17 ~ HomeComponent ~ constructor ~ numbro:", numbro.language())
  }
  numbroFn=numbro;
  formatAgrStr=""
  setNumber(){
    try{
      this.formatAgr=JSON.parse(this.formatAgrStr.replace(/ /g,'').replace(/\n/g,''));
    }catch(e){
      console.log("🚀 ~ file: home.component.ts:20 ~ HomeComponent ~ setNumber ~ e:", e)
      
    }
  }
  setNumber2(){
    console.log("🚀 ~ file: home.component.ts:31 ~ HomeComponent ~ setNumber2 ~ this.numbroFn(this.number_input).value():", this.numbroFn(this.number_input).value())
    console.log("🚀 ~ file: home.component.ts:31 ~ HomeComponent ~ setNumber2 ~ this.numbroFn(this.number_input).value():", this.numbroFn(this.number_input).valueOf())
  }
  setNumbroLocale(locale: string){
    try {
      if (!numbro.languages()[locale]) {
        // Unfortunatelly we need to include the languages file directly.
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const languages = require("numbro/dist/languages.min.js");
        if (languages) {
          const numbroLanguage = languages[locale];
          if (numbroLanguage) {
            numbro.registerLanguage(numbroLanguage);
          }
        }
      }
      numbro.setLanguage(locale);
    } catch (e:any) {
      console.log(
        "Error with configuring numbro" +
          (e.message ? ": " + e.message : ".")
      );
      console.log(e);
    }
  }
}
