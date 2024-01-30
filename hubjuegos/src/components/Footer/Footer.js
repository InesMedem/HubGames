// --- Footer.js -----> src/components/Footer/Footer.js
import "./Footer.css";
const template = () => `
<h3><span> With 💘 from </span id=link> <a href="https://inesmedem.com" target="_blank"> Inés </a> </h3>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
