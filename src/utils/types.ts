export type State = {
  nav: String
  sections: [Section]
}

export type Section = {
  name: String;
  top: number;
  bottom: number;
};
