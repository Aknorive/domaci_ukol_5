const inputWage = Number(prompt('Zadejte hrubu mzdu v korunách za hodinu: '));
const inputHours = Number(prompt('Zadejte kolik hodin denně průměrně pracujete: '));
const inputDays = Number(prompt('Zadejte kolik dní v měsící průměrně pracujete: '));
const inputTaxPercentage = Number(prompt('Zadejte procento zdaneni: '));

function salary(wage, hours, days) {
    return (wage * hours * days);
}

function taxed(countedSalary, taxedPercentage) {
  return (countedSalary *((100 - taxedPercentage)/100))
}

document.body.innerHTML += `Vase hruba mzda je : ${taxed(salary(inputWage, inputHours, inputDays), inputTaxPercentage)} pri ${inputTaxPercentage}% danich`;
