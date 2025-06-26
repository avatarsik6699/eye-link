export namespace FiltersTypes {
  export type Filter = {
    id: number;
    value: string;
    label: string;
    children?: Filter[];
  };

  export type Page = Required<Pick<Filter, "label" | "children">> & {};
}