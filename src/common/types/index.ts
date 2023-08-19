export interface Code {
  code: number | string;
  id: string;
  group?: string;
  description: string;
  message: string;
  list?: Codes;
}

export interface Codes extends Array<Code> {}

export interface CodeObject {
  code: string | number;
  description: string;
  message: string;
}

export interface CodeObjects {
  [key: string]: CodeObject;
}

export default Codes;
