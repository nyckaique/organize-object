function organize(array) {
  var arrayEu = [];
  var arrayAdmin = [];
  var arrayOthers = [];
  //separando em 3 arrays dependendo das condições que eu escolhi
  for (obj of array) {
    if (obj.itsMe === true) {
      arrayEu.unshift(obj);
    } else if (obj.itsMe !== true && obj.admin === true) {
      arrayAdmin.push(obj);
    } else if (obj.itsMe !== true && obj.admin !== true) {
      arrayOthers.push(obj);
    }
  }
  //ordenando os objetos dentro de suas array alfabeticamente pelo nome
  arrayAdmin.sort((a, b) => {
    var fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  //ordenando os objetos dentro de suas array alfabeticamente pelo nome
  arrayOthers.sort((a, b) => {
    var fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  //criando uma nova array recebendo as array anteriores na ordem que eu escolhi
  //primeiro vem a array que contem o obj com itsMe true
  //segundo vem a array com obj admin true
  //terceiro vem a array com obj admin false
  var newArray = [];
  for (obj of arrayEu) {
    newArray.push(obj);
  }
  for (obj of arrayAdmin) {
    newArray.push(obj);
  }
  for (obj of arrayOthers) {
    newArray.push(obj);
  }
  array = newArray;
  //imprime a array
  console.log(array);
  //retorna a array
  return array;
}
var array = [
  { itsMe: false, admin: false, name: "Joao" },
  { itsMe: false, admin: true, name: "Pedro" },
  { itsMe: false, admin: false, name: "Carlos" },
  { itsMe: true, admin: true, name: "Nycollas" },
  { itsMe: false, admin: true, name: "Bruno" },
];
//console.log(array);
organize(array);
