import { Link } from "react-router-dom";
import isLogin from "../utils/isLogin";

const Navbar = ({ signOut, auth }) => {
  console.log(auth);
  return (
    <>
      Navbar
      <Link to="/">Home</Link>
      <Link to="/things">Things</Link>
      {auth.token ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={signOut}>Deconnexion</button>
        </>
      ) : (
        <>
          <Link to="/signin">Connexion</Link>
          <Link to="/signup">S'inscrire</Link>
        </>
      )}
    </>
  );
};
export default Navbar;
