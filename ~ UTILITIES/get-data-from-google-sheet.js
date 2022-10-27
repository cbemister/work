let showroomContainer = document.querySelector("#showroom-content");

//var id = '1PwhQCDxfCpeQ4YCvDgoQojWj9AuEugRKw59aqqDwp84';
// var id = '1_DrxQ2F1hG_ZqS_nM01u4BWmLTnlHUoxiN1k65Mj2fs';
var id = '1G5ed1D97AVR22cDYrKgcuxxnZFAoZmx3ZtiXDomgnjA';
var gid = '0';
var url = 'https://docs.google.com/spreadsheets/d/' + id + '/gviz/tq?tqx=out:json&tq&gid=' + gid;

fetch(url)
	.then(response => response.text())
	.then(data => showroomData(data.slice(47, -2))
		// .then(data => showroomContainer.innerHTML=showroomData(data.slice(47, -2))
	);

function showroomData(data) {
	var json = JSON.parse(data);
	console.log(json.table.rows[0].c);
	const showroomTemplate = `
    ${json.table.rows.slice(1).map((vehicle) => `
      <div>
        <h3>${vehicle.c[0].v}</h3>
        <h4>${vehicle.c[1].v}</h4>
        <p>${vehicle.c[2].v}</p>
        <img src="https://www.mercedes-benz.ca/${vehicle.c[3].v}" alt="${vehicle.c[0].v}"/>
      </div>
    `).join('')}
  `;
	showroomContainer.innerHTML = showroomTemplate;
}

//PREVIOUS WORKING VERSION
// let showroomContainer = document.querySelector("#showroom-content");
// let showroomTwo = document.querySelector("#showroom-two");

// var id = '1PwhQCDxfCpeQ4YCvDgoQojWj9AuEugRKw59aqqDwp84';
// var gid = '341295082';
// var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;

// fetch(url)
//   .then(response => response.text())
//   .then(data => showroomData(data.slice(47, -2))
//   // .then(data => showroomContainer.innerHTML=showroomData(data.slice(47, -2))
//   );

// function showroomData(data) {
//   var json = JSON.parse(data);
//   const showroomTemplate = `
//     ${json.table.rows.slice(1).map((vehicle) => `
//       <div>
//         <h3>${vehicle.c[0].v}</h3>
//         <h4>${vehicle.c[1].v}</h4>
//         <p>${vehicle.c[2].v}</p>
//         <img src="${vehicle.c[3].v}" alt="${vehicle.c[0].v}"/>
//       </div>
//     `).join('')}
//   `;
//   showroomTwo.innerHTML = showroomTemplate;
// }