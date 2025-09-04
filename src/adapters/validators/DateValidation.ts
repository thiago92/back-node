import { Validation } from "../interface/validation";
import { DateValidator } from "../interface/dateValidator";
import { InvalidParamError } from "../presentations/api/errors/invalid-param-error";

export class DateValidation implements Validation {
  constructor(
    private readonly field: string,
    private readonly dateValidator: DateValidator
  ) {}

  validate(data: any): void | Error {
    const isValid = this.dateValidator.isValid(data[this.field]);
    if (!isValid) {
      return new InvalidParamError(this.field);
    }
  }
}