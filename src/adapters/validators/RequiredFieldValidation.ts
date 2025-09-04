import { Validation } from "../interface/validation";
import { InvalidParamError } from "../presentations/api/errors/invalid-param-error";


export class RequiredFieldValidation implements Validation {
  constructor(private readonly field: string) {}

  validate(data: any): Error | void {
    if (!data[this.field]) {
      return new InvalidParamError(this.field);
    }
  }
}
