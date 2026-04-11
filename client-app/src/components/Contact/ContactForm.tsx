import { Box, Button, Container, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import useForm, { type Values } from '../../hooks/useForm';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

export default function ContactForm() {
  const [emailSent, setEmailSent] = useState(false);
  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    true,
    validate,
  );
  const serviceID = 'service_yqo5rw5';
  const templateID = 'template_loaeo0l';
  const userID = 'dFpCPYdaMXPW8Jcu7';

  const sendEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
    emailjs.sendForm(serviceID, templateID, e.currentTarget, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  function validate(fieldValues: Values) {
    const temp: Values = { ...errors };
    if ('from_name' in fieldValues) {
      temp.from_name = fieldValues.from_name ? '' : 'This field is required';
    }
    if ('sender_email' in fieldValues) {
      temp.sender_email = /.+@.+..+/.test(fieldValues.sender_email!)
        ? ''
        : 'Email is not valid';
    }
    if ('message' in fieldValues) {
      temp.message = fieldValues.message ? '' : 'This field is required';
    }
    setErrors({ ...temp });

    if (fieldValues === values) {
      return Object.values(temp).every((x) => x === '');
    }
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate(values)) {
      setEmailSent(true);
      sendEmail(e);
      resetForm();
    }
  };

  return (
    <Container
      maxWidth='sm'
      sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}
    >
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      >
        <TextField
          label='Name'
          value={values.from_name}
          name='from_name'
          color='secondary'
          margin='normal'
          required
          disabled={emailSent}
          onChange={handleInputChange}
          {...(errors.from_name && {
            error: true,
            helperText: errors.from_name,
          })}
        />
        <TextField
          label='Email'
          value={values.sender_email}
          name='sender_email'
          color='secondary'
          margin='normal'
          required
          disabled={emailSent}
          onChange={handleInputChange}
          {...(errors.sender_email && {
            error: true,
            helperText: errors.sender_email,
          })}
        />
        <TextField
          label='Message'
          value={values.message}
          name='message'
          color='secondary'
          margin='normal'
          required
          disabled={emailSent}
          onChange={handleInputChange}
          {...(errors.message && { error: true, helperText: errors.message })}
          multiline={true}
          minRows={4}
        />
        <Button
          type='submit'
          variant='contained'
          disabled={emailSent}
          color='secondary'
          sx={{ my: 2, py: 2 }}
        >
          {emailSent ? (
            'Email sent'
          ) : (
            <>
              Send email&nbsp;
              <SendIcon fontSize='small' />
            </>
          )}
        </Button>
      </Box>
    </Container>
  );
}
