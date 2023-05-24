export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }
}
export const EntryFormErrorMessages = [
  new ErrorMessage('textEntry', 'required', 'Please enter a valid title for your entry')
];
