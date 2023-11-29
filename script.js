const inputWage = Number(prompt('Zadejte hrubu mzdu v korunách za hodinu: '));
const inputHours = Number(prompt('Zadejte kolik hodin denně průměrně pracujete: '));
const inputDays = Number(prompt('Zadejte kolik dní v měsící průměrně pracujete: '));
const inputTaxPercentage = Number(prompt('Zadejte procento zdaneni: '));

function salary(wage, hours, days) {
  const calculatedSalary = wage * hours * days;
  return calculatedSalary;
}

function taxed(taxedPercentage) {
  return salary(inputWage,inputHours,inputDays)*((100 - taxedPercentage)/100)
}

document.body.innerHTML += `Vase hruba mzda je : ${taxed(inputTaxPercentage)} pri ${inputTaxPercentage}% danich`;
