import { useState } from "react";

type useToggleReturn = [value: boolean, toggle: () => void]

export function useToggle(initialValue: boolean): useToggleReturn {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {setValue((prev) => !prev)};

  return [value, toggle];
}