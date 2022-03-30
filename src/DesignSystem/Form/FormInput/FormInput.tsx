import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgb(255, 255, 255);
  padding: 15px 0;
  margin: 5px 0;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: transparent;
  font-family: Manrope, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 0.875rem;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 1px;
  position: relative;
  padding: 4px 8px;
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
`

interface InputProps {
  type: string;
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  value: string;
  placeholder?: string;
  error?: string;
}

const FormInput = (props: InputProps) => {
  const { error, ...otherProps } = props;
  return (
    <InputWrapper>
      <Input {...otherProps} />
      {error &&
        <Error>{error}</Error>
      }
    </InputWrapper>
  );
};

export default FormInput;
