// useInput.tsx
import { useState, ChangeEvent } from "react";

type UseInputReturnType = [
  string,
  (e: ChangeEvent<HTMLInputElement>, newValue?: string) => void,
  React.Dispatch<React.SetStateAction<string>>
];

const useInput = (initialValue = ""): UseInputReturnType => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>, newValue?: string) => {
    // newValue가 제공되면 해당 값을 사용하여 setValue를 호출하고,
    // 그렇지 않으면 기본적으로 e.target.value를 사용하여 setValue를 호출합니다.
    setValue(newValue || e.target.value);
  };

  return [value, onChange, setValue];
};

export default useInput;
