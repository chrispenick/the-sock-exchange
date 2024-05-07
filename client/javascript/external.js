async function getData() {
  // Use fetch to retrieve data over the network from an API endpoint
  const socks = await fetch("http://localhost:3000/data/socks.json").then(
    (res) => res.json()
  );
  updateHTML(socks); // Update HTML after data is fetched
}

function updateHTML(socks) {
  //   for (let i = 0; i < socks.length; i++) {
  //     let sock = socks[i];
  //     let sockDiv = document.createElement("div");
  //     sockDiv.innerHTML = `<div>Color: ${sock.color}</div><div>Size: ${sock.size}</div>`;
  //     document.getElementById("data").appendChild(sockDiv);
  //   }
  let table = document.createElement("table");
  table.className = "table"; // Add CSS class to the table
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  // Create table headers
  let headers = Object.keys(socks[0]);
  let tr = document.createElement("tr");

  headers.forEach(header => {
  	let th = document.createElement('th');
  	th.textContent = header;
  	tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  // Create table body
  socks.forEach((sock) => {
    let tr = document.createElement("tr");
    for (let key in sock) {
      let td = document.createElement("td");
      td.textContent = sock[key];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  document.getElementById("data").appendChild(table);
}

// Call the function to fetch and update data
getData();
