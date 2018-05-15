const outputDiv = $('#pups');

const domString = (pups) => {
  pups.forEach((pup) => {
    let string = '';
    string += `<div class="col-sm-6 col-md-4">`;
    string +=   `<div class="thumbnail">`;
    string +=     `<div class="caption">`;
    string +=       `<h3>${pup.name}</h3>`;
    string +=       `<p>${pup.bio}</p>`;
    string +=     `</div>`;
    string +=   `</div>`;
    string += `</div>`;
    printToDom(string);
  });
};

const printToDom = (pupz) => {
  outputDiv.append(pupz);
};

module.exports = domString;
