// const text = document.querySelector('h1');
// text.innerHTML = localStorage.getItem('name');
// localStorage.setItem('name','info');
// localStorage.setItem('name1','info1');
// localStorage.setItem('name2','info2');
// localStorage.setItem('name3','info3');

// localStorage.removeItem('name');
// localStorage.clear()

const langdata = {
  az: ["Ana Sehife", "Haqqimizda", "Xidmeterimiz", "Meqale", "Elaqe"],
  en: ["Home", "About", "Services", "Blog", "Contact"],
};

const nav = document.querySelector("nav");
const btn = document.querySelector("#mode");

if (
  localStorage.getItem("mode") === null &&
  localStorage.getItem("lang") === null &&
  localStorage.getItem("langbtn") === null
) {
  localStorage.setItem("mode", "navbar navbar-expand-lg bg-light navbar-light");
  localStorage.setItem("lang", langdata.az);
  localStorage.setItem("langbtn", "EN");
} else {
  btn.onclick = () => {
    if (nav.className == "navbar navbar-expand-lg bg-light navbar-light") {
      nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
      localStorage.setItem(
        "mode",
        "navbar navbar-expand-lg bg-dark navbar-dark"
      );
    } else {
      nav.className = "navbar navbar-expand-lg bg-light navbar-light";

      localStorage.setItem(
        "mode",
        "navbar navbar-expand-lg bg-light navbar-light"
      );
    }
  };

  nav.className = localStorage.getItem("mode");

  const langItem = document.querySelectorAll(".nav-link");

  document.querySelector("#langbtn").onclick = () => {
    if (document.querySelector("#langbtn").innerHTML === "AZ") {
      localStorage.setItem("lang", langdata.az);
      for (let i in langdata.az) {
        langItem[i].innerHTML = langdata.az[i];
      }
      document.querySelector("#langbtn").innerHTML = "EN";
      localStorage.setItem("langbtn", "EN");
    } else {
      localStorage.setItem("lang", langdata.en);
      for (let i in langdata.en) {
        langItem[i].innerHTML = langdata.en[i];
      }
      document.querySelector("#langbtn").innerHTML = "AZ";
      localStorage.setItem("langbtn", "AZ");
    }
  };

  for (let i in langdata.az) {
    langItem[i].innerHTML = localStorage.getItem("lang").split(",")[i];
  }

  document.querySelector("#langbtn").innerHTML =
    localStorage.getItem("langbtn");
}
