import validator from "validator";
import { EmailValidator } from "../interfaces/emailValidator";

export class EmailValidatorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return validator.isEmail(email);
  }
}
