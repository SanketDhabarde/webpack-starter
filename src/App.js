import _ from "lodash";

export const App = () => {
  return `
    <div class="counter-container my-1"> 
      <h2> ${_.join(["Welcome"], " ")} </h2>
      <p class="my-1"> Build apps with plain JS but with modern tooling... </p>
      <div class="counter">
        <div class="count-span">0</div>
        <button class="btn btn-secondary decrement">Decrement</button>
        <button class="btn btn-primary increment">Increment</button>
      </div>
    </div>
  `;
};

export const exampleFunctionality = () => {
  const countArea = document.querySelector(".count-span");
  let count = +document.querySelector(".count-span").innerHTML;
  const incBtn = document.querySelector(".increment");
  const decBtn = document.querySelector(".decrement");

  incBtn.addEventListener("click", () => {
    count++;
    countArea.innerHTML = count;
  });

  decBtn.addEventListener("click", () => {
    count--;
    countArea.innerHTML = count;
  });
};
