import validator from "validator";
import { DateValidator } from "../interfaces/dateValidator";

export class DateValidatorAdapter implements DateValidator {
  isValid(date: string): boolean {
    // Aqui assumimos formato YYYY-MM-DD (mais comum em APIs)
    return validator.isDate(date, { format: "YYYY-MM-DD", strictMode: true });
  }
}