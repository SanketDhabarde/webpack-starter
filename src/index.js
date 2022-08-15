import Logo from "./logo.svg";
import "./App.css";

const root = document.getElementById("root");

root.innerHTML = `
    <div class="home">
        <img src="${Logo}" alt="build icon"/>
        <h1 class="my-1">VanillaJs Starter Kit</h1>
        <button id="show-ex" class="btn btn-primary">Show Example</button>
        <div id="counter-example"></div>
    </div>
`;

const btnShowExample = document.querySelector("#show-ex");
const counterExample = document.querySelector("#counter-example");
btnShowExample.addEventListener("click", showCounterExample);

function showCounterExample() {
  counterExample.innerHTML = `Loading...`;

  import(/* webpackPrefetch: true */ "./App").then(
    ({ App, exampleFunctionality }) => {
      counterExample.innerHTML = "";
      counterExample.innerHTML = App();
      exampleFunctionality();
    }
  );
}
