import "../App.css";
import CookM from "../assets/images/cookH.png";
import ChefM from "../assets/images/chef.png";
import CookF from "../assets/images/cookF.png";
import ChefF from "../assets/images/baker.png";
import Modal from "../components/modal/Modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const WelcomePage = () => {
  const navigate = useNavigate();
  const [displayModal, toDisplayModal] = useState(false);
  return (
    <div className="App-child">
      <div className={"hero"}>
        <h1>Be a chef, hire a chef </h1>
        <p>Faites appel aux services d'un chef et profitez ! </p>
        <button onClick={() => navigate("/work-in-progress")}>
          J'EXPLIQUE MON BESOIN <div>🍲</div>
        </button>
        <button onClick={() => navigate("/work-in-progress")}>
          VOIR LES CHEFS<div>👨‍🍳</div>
        </button>
      </div>

      <div className={"Welcome-page"}>
        <img src={CookM} className={"cook-male-image"} alt="" />

        <img src={CookF} className={"cook-female-image"} alt="" />
      </div>
      <div className={"informations-homeCooker"}>
        <h4>Un événement perso ou pro,</h4>{" "}
        <h4>un diner en amoureux ou entre amis ?</h4>
        <p>Chez HomeCooker, c'est entre vous que tout se décide.</p>
        <p>Vous vous mettez d'accord sur la prestation. </p>
        <p>
          Nous vous aidons à trouver les meilleurs chefs selon vos besoins.
          <button onClick={() => navigate("/work-in-progress")}>
            J'EXPLIQUE MON BESOIN
          </button>
        </p>
        <p>Les chefs vous proposent leur devis et vous pouvez les accepter.</p>
        <p>Nous vérifions le profil des chefs.</p>
        <p>
          Nous sécurisons les échanges. Selon les prestations, un accompte
          pourra être nécessaire au chef{" "}
          <small>(* à partir d'un certain nombre de convives)</small>
        </p>
      </div>
      <div className={"Welcome-page-informations"}>
        <img src={ChefM} className={"chef-male-image"} alt="" />
        <img src={ChefF} className={"chef-female-image"} alt="" />
      </div>
    </div>
  );
};
export default WelcomePage;
