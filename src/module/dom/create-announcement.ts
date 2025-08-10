export const createAnnouncement = () => {
  const container = document.createElement("div");

  container.classList.add("announcement");

  const error = document.createElement("div");

  error.classList.add("error");

  const winner = document.createElement("div");

  winner.classList.add("success");

  container.appendChild(error);
  container.appendChild(winner);

  return container;
};
