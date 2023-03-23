import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-form-demo1',
  templateUrl: './form-demo1.component.html',
  styleUrls: ['./form-demo1.component.scss']
})
export class FormDemo1Component {
  // 模板驱动式表单
  selectedCity1: string = ''
  xMale = [
    { name: '男', code: '0' },
    { name: '女', code: '1' }
  ]
  educationLevels = [
    { name: '高中及以下', code: '0' },
    { name: '技校中专', code: '1' },
    { name: '大学专科', code: '2' },
    { name: '大学本科', code: '3' },
    { name: '研究生', code: '4' },
    { name: '博士生', code: '5' }
  ]
  degrees = [
    { name: '无学位', code: '0' },
    { name: '学士', code: '1' },
    { name: '研究生', code: '2' },
    { name: '博士', code: '3' }
  ]
  formObj = {
    name: '',
    sex: '',
    birthDate: '',
    educationLevel: ''
  }
  /**
   * required 必填字段
minlength 字段最小长度
maxlength 字段最大长度
pattern 验证正则 例如：pattern=“\d” 匹配一个数值
   */
  onSubmit(form: NgForm) {
    let nameErrorMsg = ''
    if (form.invalid) {
      if (form.controls['name'].errors) {
        nameErrorMsg =
          'name error:' + JSON.stringify(form.controls['name'].errors)
      } else {
        nameErrorMsg = ''
      }
    }
    console.log(
      '🚀 ~ file: form-demo1.component.ts:37 ~ FormDemo1Component ~ onSubmit ~ formObj:',
      this.formObj,
      form
    )
  }
}
