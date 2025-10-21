import { series } from "./data.js";
import { Serie } from "./serie.js";

window.addEventListener("DOMContentLoaded", () => {
  function renderCard(serie: Serie): void {
    const cardContainer = document.getElementById("serie-card")!;
    cardContainer.innerHTML = `
      <div class="card">
        <img src="${serie.imageUrl}" class="card-img-top" alt="${serie.name}">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <a href="${serie.websiteUrl}" target="_blank" class="btn btn-primary">Más información</a>
        </div>
      </div>
    `;
  }

  const tableBody = document.querySelector("#series-table tbody")!;
  series.forEach((serie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    row.addEventListener("click", () => renderCard(serie)); // 👈 This makes it interactive!
    tableBody.appendChild(row);
  });

  const totalSeasons = series.reduce((sum, s) => sum + s.seasons, 0);
  const average = totalSeasons / series.length;
  const averageText = document.getElementById("average-seasons")!;
  averageText.textContent = `Seasons average: ${average.toFixed(2)}`;
});
