import { Component } from '@angular/core'
import {
  FormGroup,
  FormBuilder,
  Validators,
  UntypedFormControl,
  FormArray,
  FormControl
} from '@angular/forms'
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-form-demo2',
  templateUrl: './form-demo2.component.html',
  styleUrls: ['./form-demo2.component.scss']
})
export class FormDemo2Component {
  form: FormGroup
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
  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.form = this.fb.group({
      name: ['', [Validators.pattern('^[a-zA-Z][a-zA-Z0-9]{3,15}$')]],
      sex: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      educationLevel: ['', [Validators.required]],
      tel: [null, [Validators.pattern('^1(3|4|5|7|8)\\d{9}$')]],
      confirmTel: ['', [Validators.required, this.confirmationValidator]],
      contacts: new FormArray([
        this.fb.group({
          username: new FormControl(),
          address: new FormControl(),
          phone: new FormControl()
        })
      ])
    })
  }
  get contacts() {
    return this.form.get("contacts") as FormArray
  }

  // 添加联系方式
  addContact() {
    // 联系方式
    const myContact: FormGroup = new FormGroup({
      username: new FormControl(),
      address: new FormControl(),
      phone: new FormControl()
    })
    // 向联系方式数组中添加联系方式
    this.contacts.push(myContact)
  }

  // 删除联系方式
  removeContact(i: number) {
    this.contacts.removeAt(i)
  }
  confirmationValidator = (
    control: UntypedFormControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true }
    } else if (control.value !== this.form.controls['tel'].value) {
      return { confirm: true, error: true }
    }
    return {}
  }
  submit(){
    console.log(this.form.value)
  }
}
