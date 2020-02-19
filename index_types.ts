// used when prop name can vary, and number of props can vary
// other named prop must have the same type
interface ErrorContainer {
  id: string;
  [prop: string]: string;
}

const errorMsg: ErrorContainer = {
  id: "123",
  email: "not a valid email"
}