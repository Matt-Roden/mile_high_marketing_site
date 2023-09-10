import React, { useRef } from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Date = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField
        id="date"
        label="Date of Event: "
        name="date_of"
        className=" w-1/2"
      />
    </LocalizationProvider>
  );
};

const EmailForm = () => {
  const form = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await emailjs
      .sendForm(
        "service_koe7hxh",
        "template_69up1hn",
        form.current,
        "iJ_W9mK1_fbgqFPFw"
      )
      .then((result) => {
        if (result.text === "OK") {
          navigate("/");
        }
      });
  };

  return (
    <main className=" flex flex-col items-center space-y-10 py-10 ">
      <h1>Let's do this! 🪩</h1>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className=" sm:w-3/5 flex flex-col space-y-8 px-4 "
      >
        <TextField
          id="name-field"
          label="Your Name: "
          variant="outlined"
          name="name_from"
          className=""
        />
        <TextField
          id="email-field"
          label="Your Email: "
          variant="outlined"
          name="email_from"
        />
        <div className=" flex space-x-5 ">
          <Date />
          <div className=" space-x-3 flex items-center">
            <input
              type="checkbox"
              id="not_sure_date"
              name="not_sure_date"
              value="true"
              className=" h-5 w-5"
            />
            <label className=" text-lg">Not sure yet</label>
          </div>
        </div>
        <div className=" flex flex-col space-y-3">
          <span>What can we help you with? Give us the details!</span>
          <TextField
            id="message-field"
            label=""
            variant="outlined"
            multiline
            minRows={8}
            name="message"
          />
        </div>
        <div className=" flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-blue-600 w-52 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Send email
          </button>
        </div>
      </form>
    </main>
  );
};

export default EmailForm;
