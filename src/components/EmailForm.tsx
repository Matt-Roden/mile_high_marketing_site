import React, { useRef } from "react";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";

import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const form = useRef();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(form.current);

    // emailjs
    //   .sendForm(
    //     "service_koe7hxh",
    //     "template_69up1hn",
    //     form.current,
    //     "iJ_W9mK1_fbgqFPFw"
    //   )
    //   .then((result) => {
    //     console.log(result.text);
    //   });
  };

  return (
    <Box padding={10} className="bg-black h-screen">
      <Card sx={{ minWidth: 275, bgcolor: "#DDDDDD", padding: "16px" }}>
        <form ref={form} onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            direction={"column"}
            // style={{ width: "800px" }}
          >
            <Grid item xs>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Send us an email
              </Typography>
            </Grid>
            <Grid container className="p-4">
              <Grid item xs={6}>
                <TextField
                  id="name-field"
                  label="Your Name: "
                  variant="outlined"
                  name="name_from"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="email-field"
                  label="Your Email: "
                  variant="outlined"
                  name="email_from"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="phone-field"
                  label="Your Phone Number: "
                  variant="outlined"
                  name="phone_number"
                />
              </Grid>
            </Grid>
            <Grid item xs>
              <TextField
                id="mesaage-field"
                label="Message: "
                variant="outlined"
                multiline
                minRows={8}
                name="message"
              />
            </Grid>
            <Grid item xs>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send
              </button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default EmailForm;
