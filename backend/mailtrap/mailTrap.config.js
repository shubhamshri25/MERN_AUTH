import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Shubham",
};

// This will be made dynamic with the user's email

// const recipients = [
//   {
//     email: "shubhshri25@gmail.com",
//   },
// ];
