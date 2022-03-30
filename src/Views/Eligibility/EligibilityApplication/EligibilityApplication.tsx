import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import * as Yup from 'yup';

import FormInput from "../../../DesignSystem/Form/FormInput";
import SubmitButton from "../../../DesignSystem/Form/SubmitButton";
import Title from "../../../DesignSystem/Title";
import { FormValues } from '../../../models/EligibilityModel'

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const FormWrapper = styled.div`
  flex: 1 1 auto;
  width: 100%;
`;

interface EligibilityApplicationProps {
  onFormSubmit: (values: FormValues) => void;
}

const EligibilityApplication = ({ onFormSubmit }: EligibilityApplicationProps) => {
  const { handleChange, handleSubmit, values, errors } = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      onFormSubmit(values);
    },
  });

  const handleSubmitButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  }
  return (
    <FormWrapper>
      <Title>Cards</Title>
      <form onSubmit={(e) => handleSubmitButton(e)}>
        <FormInput
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={values.name}
          placeholder="Name"
          error={errors.name}
        />
        <FormInput
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
          placeholder="Email"
          error={errors.email}
        />
        <FormInput
          type="text"
          name="address"
          id="address"
          onChange={handleChange}
          value={values.address}
          placeholder="Address"
          error={errors.address}
        />
        <SubmitButton text="Submit" disabled={Object.keys(errors).length > 0} />
      </form>
    </FormWrapper>
  );
};

export default EligibilityApplication;
