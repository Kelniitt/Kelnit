async function JSONFileHelper(jsonFileUrl) {

  try {
    const response = await fetch(jsonFileUrl)

    if (!response.ok) {
      let errorMessage = `HTTP Error ! Status: ${response.status}`
      throw new Error(errorMessage)
    }

    const result = await response.json();
    return result
  } catch (error) {
    let errorMessage = `Error : ${error.message}`
    console.error(errorMessage);
    return null
  }
}


          {/*  */}
        // </a>
        // &nbsp;

async function Mistari(jsonFile){

  const result = await JSONFileHelper(jsonFile)

  if (!result) {
    console.log("Fail !")
  }

  let container = document.getElementById("mistlord");
  result.users.forEach(user => {
    let output = `
    <a href="${user.url}" type="button" class="btn btn-dark rounded" style="margin-right : 5px;">
      <i class="${user.icon}"></i>
    </a>
    `;
    container.innerHTML += output;
  })
}

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

async function MainMinute(jsonFile) {

  const result = await JSONFileHelper(jsonFile)

  if (!result) {
    console.log("Fail !")
  }

  let container = document.getElementById("minutelord");
  result.projects.forEach(project => {
    let output = `
    <div class="col-12 col-md-4 pt-4">
      <div class="card" style="width: 18rem;">
        <img src="Mountain.jpeg" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <a href="${project.url}" type="button" class="btn btn-dark rounded mt-4">
            <i class="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
    `;
    container.innerHTML += output;
  })
}

Mistari("/assets/content/user.json")

GenerateStack()

Yearly()

MainMinute("/assets/content/projecta.json");