import { useState } from 'react';

export interface Values {
  from_name?: string;
  sender_email?: string;
  message?: string;
}

export default function useForm(
  validateOnChange: boolean = false,
  validate: (formValues: Values) => void,
) {
  const [values, setValues] = useState<Values>({
    from_name: '',
    sender_email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Values>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) {
      validate({ [name]: value });
    }
  };

  const resetForm = () => {
    setValues({
      from_name: '',
      sender_email: '',
      message: '',
    });
  };

  return {
    values,
    errors,
    setValues,
    setErrors,
    handleInputChange,
    resetForm,
  };
}
