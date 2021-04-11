import React from "react";

export interface IListItem {
  label: string;
  onChange: React.FormEventHandler;
  id: number;
  checked?: boolean;
  children?: React.FC | JSX.Element;
}