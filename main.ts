import { series } from "./data.js";

window.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#series-table tbody")!;
  series.forEach((serie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    tableBody.appendChild(row);
  });

  const totalSeasons = series.reduce((sum, s) => sum + s.seasons, 0);
  const average = totalSeasons / series.length;
  const averageText = document.getElementById("average-seasons")!;
  averageText.textContent = `Seasons average: ${average.toFixed(2)}`;
});
