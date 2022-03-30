import machine from "../assets/images/SurDial 55 Plus.png";
import SURDIAL from "../assets/images/SURDIAL X - BVM.png";
import Fiber_product from "../assets/images/elisio-hx.jpg";
import ELISIO_19L from "../assets/images/ELISIO- 19L-M-H.png";
import water from "../assets/images/water1.jpg";
import phoenix from "../assets/images/phoenix-oneds_550.png";
import Hemo_RO from "../assets/images/Hemo RO 3000 - 6.jpg";
import Synthetic_Hollow from "../assets/images/Synthetic-Hollow.jpg";
const produtcs = [
  {
    id: 1,
    title: " Dialysis Machine",
    image: machine,
    itemData: [
      {
        img: machine,
        title: "machine",
        rows: 4,
        cols: 2,
      },
      {
        img: SURDIAL,
        title: "machine",

        cols: 2,
        rows: 4,
      },
    ],

    description:
      " The dialysis machine mixes and monitors the dialysate. Dialysate is the fluid that helps remove the unwanted waste products from your blood.",
  },
  {
    id: 2,
    title: " Water Treatment Systems",
    image: water,
    itemData: [
      {
        img: water,
        title: "water",
        rows: 4,
        cols: 2,
      },
      {
        img: phoenix,
        title: "water",

        cols: 2,
        rows: 2,
      },
      {
        img: Hemo_RO,
        title: "water",

        cols: 2,
        rows: 2,
      },
    ],
    description:
      " The dialysis machine mixes and monitors the dialysate. Dialysate is the fluid that helps remove the unwanted waste products fromyour blood.",
  },
  {
    id: 3,
    title: "Synthetic Hollow-Fiber Dialyzer",
    image: Fiber_product,
    itemData: [
      {
        img: Synthetic_Hollow,
        title: "Fiber",
        rows: 4,
        cols: 6,
      },
    ],
    description:
      " Nous vendons des dialyseurs à fibres creuses synthétiques doté d'une membrane en POLYNEPHRON™ exclusive, qui affiche des performances exceptionnelles, une excellente biocompatibilité et une faible thrombogénicité.Notre dialyseur est l'un des premiers dialyseurs synthétiques sans BPA (membrane, coque, empotage), ce qui améliore la santé des patients. La méthode exclusive de stérilisation gamma en chaleur sèche utilisée permet de réduire au minimum l'exposition des patients aux agents chimiques et le risque de contamination.",
  },
];

export default produtcs;
