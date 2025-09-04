import validator from "validator";
import { EmailValidator } from "../interface/emailValidator";

export class EmailValidatorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return validator.isEmail(email);
  }
}
