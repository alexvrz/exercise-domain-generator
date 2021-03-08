  let pronoun = ['the','my','her','his','our','their','your'];
  let adj = ['west', 'cool', 'funny', 'creative', 'sad', 'smart', 'colorful', 'cloudy'];
  let noun = ['jogger','racoon', 'trees', 'map', 'people', 'sunflowervirus', 'sitcom'];
  let ext = ['com', 'net', 'org', 'co', 'us', 'com', 'es'];
  


  let pronounLen= pronoun.length;
  let adjLen = adj.length;
  let nounLen = noun.length;
  let extLen = ext.length;

  for (let i=0; i<pronounLen; i++){
      for (let j=0; j<adjLen; j++){
          for (let k=0; k<nounLen; k++){
              for (let l=0; l<extLen; l++){
                let url = `${pronoun[i]}${adj[j]}${noun[k]}`;
                if (url.includes(ext[l])){
                    url = url.replace(ext[l], '');
                    
                }
                console.log(`${url}.${ext[l]}`);
              }
          }
      }
  }//let pronoun = ['the', 'our'];
//let adj = ['great', 'big'];
//let noun = ['jogger', 'racoon'];
//let ext = ['.com', '.er'];
//
//for (let i = 0; i < pronoun.length; i++) {
//    for (let x = 0; x < adj.length; x++) {
//        for (let y = 0; y < noun.length; y++) {
//            for (let z = 0; z < ext.length; z++) {
//                console.log(pronoun[i] + adj[x] + noun[y] + ext[z]);
//            }
//        }
//    }
//}
//let pronoun = ['the', 'our', 'pases'];
//let adj = ['great', 'big'];
//let noun = ['jogger', 'racoon', 'bocacom'];
//let extension = ['com', 'es', 'net']
//
//let largo1 = pronoun.length;
//let largo2 = adj.length;
//let largo3 = noun.length;
//let largo4 = noun.length;
//
//for (let j = 0; j < largo1; j++) {
//    for (let m = 0; m < largo2; m++) {
//        for (let k = 0; k < largo3; k++) {
//            let nombre = pronoun[j] + adj[m] + noun[k]
//            for (let p = 0; p < largo3; p++) {
//                //let largoext = extension[p].length;
//                //let res = nombre.substring(nombre.length - largoext, nombre.length);
//
//                //               if (res===extension[p]){
//                //                  nuevores=nombre.substring(0, nombre.length - largoext)+"."+extension[p];
//                //                    console.log(nuevores)
//                //                } else {
//                //                    console.log(nombre+"."+extension[p]);
//                //                }
//
//                //console.log(nombre.length - largoext)                
//                
//                
//                if (nombre.includes(extension[p]) === true) {
//                    console.log(nombre)
//
//                }
//                
//            }
//        }
//    }
//}  
//
//console.log("Ejercicio de domain names")
//
//let pronoun = ['the','our'];
//let adj = ['great', 'big', 'hocomla', 'aleles'];
//let noun = ['jogger','racoon', 'claudio'];
//let domains = ['com','net','org','us', 'es', 'cl'];
//
//const createDomains = () => {
//    for (p in pronoun) {
//        for (a in adj) {
//            for (n in noun) {
//                for (d in domains){
//                    let str=`${pronoun[p]}${adj[a]}${noun[n]}`
//                    if(str.includes(domains[d])){
//                        let newStr = str.replace(domains[d], "");
//                        finalStr = `${newStr}.${domains[d]}`
//                         
//                        console.log(finalStr)
//
//                    } else {
//                        console.log(`${str}.${domains[d]}`)
//                    }
//                }
//            }
//        }
//    }
//}
//
//createDomains();
//
//let pronoun = ['the', 'our', 'pases'];
//let adj = ['great', 'big'];
//let noun = ['jogger', 'racoon', 'bocacom'];
//let extension = ['com', 'es', 'net']
//
//let largo1 = pronoun.length;
//let largo2 = adj.length;
//let largo3 = noun.length;
//let largo4 = noun.length;
//
//for (let j = 0; j < largo1; j++) {
//    for (let m = 0; m < largo2; m++) {
//        for (let k = 0; k < largo3; k++) {
//            let nombre = pronoun[j] + adj[m] + noun[k]
//            for (let p = 0; p < largo3; p++) {
//                if (nombre.includes(extension[p]) === true) {
//                    
//                    let nuevonombre = nombre.replace(extension[p], "");
//                    console.log(nuevonombre+"."+extension[p])
//                } else {
//                    console.log(nombre+"."+extension[p])
//                }
//                
//            }
//        }
//    }
//}  

