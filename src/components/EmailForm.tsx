import React, { useRef, useState } from "react";
import { TextField, CircularProgress } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./EmailForm.css";

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

const EmailForm = ({ setDropConfetti }) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    await emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result) => {
        if (result.text === "OK") {
          setDropConfetti(true);
          setIsLoading(false);
          setTimeout(() => {
            navigate("/");
          }, 5000);
        }
      })
      .catch((error) => navigate("/error"));
  };

  return (
    <main className=" flex flex-col items-center space-y-8 py-7 ">
      {/* {isLoading && <LoadingBar isError={isError} isLoading={isLoading} isSuccess={isSuccess} />} */}
      <h1 className=" text-black">Let's do this! 🪩</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <form
          ref={form}
          onSubmit={handleSubmit}
          className=" sm:w-4/5 flex flex-col space-y-5 px-2 sm:px-4"
        >
          <TextField
            id="name-field"
            label="You Name:"
            variant="outlined"
            name="name_from"
            sx={{
              "& .MuiInputBase-input": {
                fontFamily: "Poppins",
              },
            }}
          />

          <TextField
            id="email-field"
            label="Email: "
            variant="outlined"
            name="email_from"
            sx={{
              "& .MuiInputBase-input": {
                fontFamily: "Poppins",
              },
              "& .MuiInputBase-root": {
                borderColor: "white",
              },
            }}
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
              <label className=" text-lg text-black">Not sure yet</label>
            </div>
          </div>
          <div className=" flex flex-col space-y-3">
            <span className=" text-black">
              What can we help you with? Give us the details!
            </span>
            <TextField
              id="message-field"
              label=""
              variant="outlined"
              multiline
              minRows={8}
              name="message"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Poppins",
                },
              }}
            />
          </div>
          <div className=" flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-blue-600 w-52 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-300 "
            >
              Send email
            </button>
          </div>
        </form>
      )}
    </main>
  );
};

export default EmailForm;
