function GenerateStack() {
  let techno = ["python", "tensorflow", "mysql", "flask"]
  let othertech = ["googlecloud", "googlebigquery", "googledataflow"]
  let techtech = ["terraform", "kubernetes", "docker"]
  let techstack = [...techno, ...othertech, ...techtech]
  const mainrow = document.querySelector("#techside")
  techstack.forEach(tech => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-4 col-md-1";

    const img = document.createElement("img");
    img.src = `https://cdn.simpleicons.org/${tech}/white`;

    colDiv.appendChild(img);
    mainrow.appendChild(colDiv);
  });
}

function Yearly() {
  let tanggal = new Date().getFullYear();
  console.log(tanggal);
}

GenerateStack()

Yearly()