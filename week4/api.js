// api.js
const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
  // replace this with your actual key
  const apiKey = "sjvhsFGC5kTfQbPITmGc5HrtSm3Wg1VVbJwnscAE";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
    }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}

getJson('activities/parks?q=climbing');




function listTemplate(item) {
  return `<li><a href="${item.url}">${item.fullName}</a> — ${item.states}</li>`;

}


async function renderClimbingList() {
  const data = await getJson('activities/parks?q=climbing');
  outputList = document.getElementById("outputList");
  const parksArray = data.data[0].parks;
  const html = parksArray.map(listTemplate).join("");
  outputList.innerHTML = html;
}

renderClimbingList();