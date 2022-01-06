const isLogin = () => {
  let authInformations = JSON.parse(localStorage.getItem("auth")) || false
  return authInformations && authInformations.token ? true : false;
};
export default isLogin;
