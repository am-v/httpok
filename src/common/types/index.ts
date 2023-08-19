export interface Code {
  code: number | string;
  id: string;
  group: string;
  description: string;
  message: string;
  isHeader: boolean;
  list?: Codes;
}

export interface Codes extends Array<Code> {}

export default Codes;
