import { FC } from "react";

type Props = {
  todoCount: number;
};

export const TodoCounter: FC<Props> = ({ todoCount }) => {
  return <h2>Todo: {todoCount}件</h2>;
};
