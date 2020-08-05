const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  calculate();

  function calculate() {
    const startdate = document.getElementById("startdate").value;
    const enddate = document.getElementById("enddate").value;
    const contval = document.getElementById("contractvalue").value; // contractvalue
    const servtax = document.getElementById("servicetax").value; // service tax
    console.log(startdate);
    function dateconvert(str1) {
      // const stdate = str1.split("/").reverse().join("");
      const stdate = str1.split("-").reverse().join("");
      const arr = [];
      arr.push(Number(stdate.slice(0, 4)));
      arr.push(Number(stdate.slice(4, 6)));
      arr.push(Number(stdate.slice(6, 8)));

      return new Date(arr[2], arr[1], arr[0]);
    }

    function monthDiff(d1, d2) {
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
      return months <= 0 ? 0 : months;
    }
    function test(d1, d2) {
      var diff = monthDiff(d1, d2);
      // console.log(
      //   d1.toISOString().substring(0, 10),
      //   "to",
      //   d2.toISOString().substring(0, 10),
      //   ":",
      //   diff
      // );
      return diff;
    }
    const months = test(dateconvert(startdate), dateconvert(enddate));
    // console.log(months);

    const instvwithoutax = parseFloat(parseInt(contval) / months);
    // console.log("investment without tax:", instvwithoutax);

    const taxoninst = instvwithoutax * (parseFloat(servtax) / 100);
    // console.log("tax on installment: ", taxoninst);

    const toinstal = (instvwithoutax + taxoninst).toFixed(2);
    // console.log("total of everything:", toinstal);
    const address = parseInt(contval) + parseFloat(servtax);

    const rescv = document.getElementById("rescv");
    rescv.innerHTML = parseInt(contval);

    const resmoc = document.getElementById("resmoc");
    resmoc.innerHTML = months;

    const restx = document.getElementById("restx");
    restx.innerHTML = parseFloat(servtax);

    const iwtres = document.querySelectorAll(".iwtres");
    for (var i = 0; i < iwtres.length; i++) {
      iwtres[i].innerHTML = instvwithoutax.toFixed(4);
    }

    const toires = document.querySelectorAll(".toires");
    for (var i = 0; i < toires.length; i++) {
      toires[i].innerHTML = taxoninst.toFixed(4);
    }

    const fnliv = document.getElementById("fnliv");
    fnliv.innerHTML = toinstal;
  }
});
