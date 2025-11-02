export class EmailAlreadyExistsError extends Error {
  constructor(email: string) {
    super(`O email "${email}" já está cadastrado.`);
    this.name = "EmailAlreadyExistsError";
  }
}