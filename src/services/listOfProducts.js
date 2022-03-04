import cotillon from "@images/cotillon.jpeg";
import product from "@images/product.jpeg";
import impresos from "@images/impresos.jpeg";
import formas from "@images/formas.jpeg";
import infladores from "@images/infladores.jpeg";
import varillas from "@images/varillas.jpeg";
import helio from "@images/helio.jpeg";
import pinata from "@images/pinata.jpeg";

export const products = [
  {
    name: "Globos Profesionales",
    image: product,
    path: "Globos-Profesionales",
  },
  { name: "Globos de Cotillón", image: cotillon, path: "Globos-de-Cotillón" },
  { name: "Globos Impresos", image: impresos, path: "Globos-Impresos" },
  { name: "Globos con Formas", image: formas, path: "Globos-con-Formas" },
  { name: "Infladores", image: infladores, path: "Infladores" },
  { name: "Varillas", image: varillas, path: "Varillas" },
  { name: "Gas Helio", image: helio, path: "Gas-Helio" },
  { name: "Piñatas", image: pinata, path: "Piñatas" },
];

export const getProduct = (pathName) =>
  products.find((product) => product.path === pathName);
