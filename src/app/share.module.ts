import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonModule } from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext'
import { TabViewModule } from 'primeng/tabview'
import { AccordionModule } from 'primeng/accordion'
import { CalendarModule } from 'primeng/calendar'
import { SidebarModule } from 'primeng/sidebar'
import { GalleriaModule } from 'primeng/galleria'
import { PasswordModule } from 'primeng/password'
import { CheckboxModule } from 'primeng/checkbox'
import { TableModule } from 'primeng/table'
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog'
import { MessageService } from 'primeng/api'
import { PanelModule } from 'primeng/panel'
import { DataViewModule } from 'primeng/dataview'
import { TreeModule } from 'primeng/tree'
import { SelectButtonModule } from 'primeng/selectbutton'
import { FileUploadModule } from 'primeng/fileupload'
import { ConfirmPopupModule } from 'primeng/confirmpopup'
import { ConfirmationService } from 'primeng/api'
import { MessageModule } from 'primeng/message'
import { ToastModule } from 'primeng/toast'
import { TreeTableModule } from 'primeng/treetable'
import { ImageModule } from 'primeng/image'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { SplitButtonModule } from 'primeng/splitbutton'
import { InputNumberModule } from 'primeng/inputnumber'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { DialogModule } from 'primeng/dialog'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    TabViewModule,
    AccordionModule,
    CalendarModule,
    SidebarModule,
    GalleriaModule,
    PasswordModule,
    CheckboxModule,
    TableModule,
    DynamicDialogModule,
    PanelModule,
    DataViewModule,
    TreeModule,
    SelectButtonModule,
    FileUploadModule,
    ConfirmPopupModule,
    MessageModule,
    ToastModule,
    TreeTableModule,
    ImageModule,
    InputTextareaModule,
    SplitButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    DialogModule
  ],
  providers: [DialogService, MessageService, ConfirmationService],
  exports: [
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    TabViewModule,
    AccordionModule,
    CalendarModule,
    SidebarModule,
    GalleriaModule,
    PasswordModule,
    CheckboxModule,
    TableModule,
    DynamicDialogModule,
    PanelModule,
    DataViewModule,
    TreeModule,
    SelectButtonModule,
    FileUploadModule,
    ConfirmPopupModule,
    MessageModule,
    ToastModule,
    TreeTableModule,
    ImageModule,
    InputTextareaModule,
    SplitButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    DialogModule
  ]
})
export class ShareModule {}
