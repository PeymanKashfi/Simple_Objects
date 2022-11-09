"use strict";

const idObject = {
  firstName: "",
  lastName: "",
  birthYear: 0,
  job: "",
  calcAge: function () {
    return 2022 - this.birthYear;
  },
};

const saveObject = () => {
  idObject["firstName"] = document.getElementById("first-name").value;
  idObject["lastName"] = document.getElementById("last-name").value;
  idObject["birthYear"] = document.getElementById("birth-year").value;
  idObject["job"] = document.getElementById("job").value;
};

const addAnElement = (elType, elText) => {
  let x = document.createElement(elType);
  let t = document.createTextNode(elText);
  x.appendChild(t);
  document.body.appendChild(x);
};

const showObject = () => {
  addAnElement("label", "First Name: ");
  addAnElement("label", idObject["firstName"]);

  addAnElement("br", "");

  addAnElement("label", "Last Name: ");
  addAnElement("label", idObject["lastName"]);

  addAnElement("br", "");

  addAnElement("label", "Age: ");
  addAnElement("label", idObject.calcAge());

  addAnElement("br", "");

  addAnElement("label", "Job: ");
  addAnElement("label", idObject["job"]);
};
