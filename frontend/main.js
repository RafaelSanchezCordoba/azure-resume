window.addEventListener("DOMContentLoaded", async () => {
  getVisitCount();
  console.log(count);
});

const functionApi = "";

const getVisitCount = async () => {
  let count = 0;
  try {
    const response = await fetch(functionApi);
    const data = await response.json();
    console.log("Website called function API.");
    count = data.count;
    document.getElementById("counter").innerText = count;
  } catch (error) {
    console.error("Error", error);
  }
  return count;
};
