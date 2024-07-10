const val1 = document.querySelector("#inputFieldOne")! as HTMLInputElement;
const val2 = document.querySelector("#inputFieldTwo")! as HTMLInputElement;
const button = document.querySelector("button");
const dispResult = document.querySelector("displayResult");

const sum = (val1: number, val2: number) => {
  return val1 + val2;
};

button?.addEventListener("click", () => {
  const result = sum(Number(val1?.value), Number(val2.value));
  console.log(result);
});
