import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Config from "../../store/config";
import AuthContext from "../../store/auth";
import getAllThings from "../../fetch/UserProfile/getAllThings";
const Things = () => {
  const authContext = useContext(AuthContext);
  const url = useContext(Config).urlAPI;
  const [things, setThings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => getAllThings(authContext, setThings, url), [authContext]);
  return (
    <>
      {things.length &&
        things.map((thing) => (
          <div>
            {thing.name}
            {thing.description}
            {thing.inStock}
            {thing.price}
            <img src={thing.imageUrl} alt="" />
            <button onClick={() => navigate(`/things/${thing._id}`)}>
              Voir
            </button>
          </div>
        ))}
      <button onClick={() => navigate(`/things/creatething`)}>
        Créer un Thing
      </button>
    </>
  );
};
export default Things;
