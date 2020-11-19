import { AbstractControl } from "@angular/forms";
import { ValidarCamposService } from "./../validar-campos.service";
import { FormGroup } from "@angular/forms";
import { Component, Input } from "@angular/core";

@Component({
  selector: "dio-input-date",
  templateUrl: "./input-date.component.html",
  styleUrls: ["./input-date.component.scss"],
})
export class InputDateComponent {
  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(public validacao: ValidarCamposService) {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
