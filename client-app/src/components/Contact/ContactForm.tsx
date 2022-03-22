import { Box, Button, Container, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICEID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATEID;
  const userID = process.env.REACT_APP_EMAILJS_USERID;

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(serviceID!, templateID!, e.target, userID!)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
      <Box
        component="form"
        onSubmit={sendEmail}
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          alignContent: "center" 
        }}
      >
        <TextField label="Name" margin="normal" name="from_name" />
        <TextField label="Email" margin="normal" name="sender_email" />
        <TextField label="Message" margin="normal" name="message" multiline={true} minRows={4} />
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </Box>
    </Container>
  );
}