import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import resetPassword from "../../fetch/User/resetPassword";
import Config from "../../store/config";
import confirmEmail from "../../fetch/User/confirmEmail";
const ConfirmEmail = ({ auth }) => {
  const navigate = useNavigate();
  const { userId, resetToken } = useParams();
  const url = useContext(Config).urlAPI;
  confirmEmail({ userId, resetToken, url, auth, navigate });
  return <></>;
};
export default ConfirmEmail;
