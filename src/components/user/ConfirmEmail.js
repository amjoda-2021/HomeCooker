import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import resetPassword from "../../fetch/User/resetPassword";
import Config from "../../store/config";
import confirmEmail from "../../fetch/User/confirmEmail";
const ConfirmEmail = () => {
  const { userId, resetToken } = useParams();
  console.log(userId, resetToken);
  const url = useContext(Config).urlAPI;
  confirmEmail({ userId, resetToken, url });
  return <>CONFIRM EMAIL</>;
};
export default ConfirmEmail;
