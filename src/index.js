import App from "./App";

const root = document.getElementById("root");

root.innerHTML = `
<h1>Learning web tooling</h1>
${App({ name: "Sanket" })}
`;
