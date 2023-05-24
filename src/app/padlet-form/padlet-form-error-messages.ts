export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }
}
export const PadletFormErrorMessages = [
  new ErrorMessage('name', 'required', 'Please enter a valid title'),
  new ErrorMessage('ispublic', 'required', 'Please decide whether your padlet is public or private')
];
