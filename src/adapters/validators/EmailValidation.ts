import { EmailValidator } from "../interface/emailValidator";
import { Validation } from "../interface/validation";
import { InvalidParamError } from "../presentations/api/errors/invalid-param-error";

export class EmailValidation implements Validation {
  constructor(
    private readonly field: string,
    private readonly emailValidator: EmailValidator
  ) {}

  validate(data: any): Error | void {
    const isValid = this.emailValidator.isValid(data[this.field]);
    if (!isValid) {
      return new InvalidParamError(this.field);
    }
  }
}
