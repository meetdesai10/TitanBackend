import { emailService } from "./emailService.js";

import twilio from "twilio";

const client = twilio(process.env.TWILIO_KEY, process.env.TWILIO_TOKEN);

export const sendOTP = (user) => {
  const otp = Math.trunc(Math.random() * 1000000);
  client.messages
    .create({
      body: `your otp is ${otp}`,
      from: "+12512374821",
      to: `+91${user.number || 7048324593}`,
    })
    .then((message) => {
      user?.email &&
        emailService({
          to: user.email,
          subject: "OTP for login",
          text: `your one time password is ${otp}`,
        });
    });
  return otp;
};
//   .done();
