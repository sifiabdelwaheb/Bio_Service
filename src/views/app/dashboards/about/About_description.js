import React, { useState } from "react";
import Box from "@mui/material/Box";
import Classes from "./style.module.css";

const Component = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        Quand le monde des fournitures médicales évolue de plus en plus
        rapidement, International Bio Service continue à travailler avec
        diligence pour garantir à ses clients des partenaires fiables et
        efficaces sur lesquels ils peuvent compter pour les approvisionner avec
        des produits de qualité supérieure en utilisant une technologie de
        pointe en provenance de Japon, l’Europe l’Asie et les états unis.{" "}
        <span
          onClick={() => setShow((prev) => !prev)}
          className={Classes.read_or_hide}
        >
          {!show ? "...Read More" : " Show Less"}
        </span>
      </div>

      {show && (
        <Box>
          <div className={Classes.about_description}>
            Nos moteurs d'approvisionnement ont continué à ouvrir la voie pour
            devenir un véritable réseau, dans le marché Tunisien ainsi qu’en
            Afrique, qui répond en toute sécurité aux différentes demandes de
            nos clients, qu'ils soient gouvernementaux ou institutionnels.
          </div>
          
          <div className={Classes.about_description}>
            International Bio Service a maintenant des accords avec des
            Fabricants du monde entier produisant un large portefeuille de
            fournitures d’hémodialyse, de cardiologie, de Laboratoire
            consommables et d'équipements médicaux - tous facilement réservés à
            nos clients.
          </div>
         
          <div className={Classes.about_description}>
            International Bio Service croit dans la combinaison des deux
            branches -Consommateur/Marchandise- pour fournir une offre
            pertinente à toutes les parties prenantes en Tunisie et en Afrique
            tout en respectant la durabilité à long terme.
          </div>
        </Box>
      )}
    </div>
  );
};

export default Component;
