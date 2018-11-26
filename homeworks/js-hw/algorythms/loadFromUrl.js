 function loadFromUrl(url) {
            return new Promise((resolve, reject) => {
                let request = new XMLHttpRequest();
                request.open('get', url);
                request.onprogress = (e) => {
                    console.log(
                        `Bytes loaded: 
                        ${e.loaded} of total: 
                        ${e.lengthComputable ? e.total : "cannot be read size from server."}`
                    );
                }
                request.onload = () => {
                    if (request.status === 200){
                        return resolve(JSON.parse(request.response));
                    } else {
                        return reject("Status other than 200 is not good enough!");
                    }
                }
                request.onerror = () => reject(request.onerror.name);
                try {
                    request.send();
                } catch (e) {
                    console.log("To be handled latter...");
                }
            });
        }

     loadFromUrl("https://swapi.co/api/films/1/").
        then((data) => data.characters.map(el => loadFromUrl(el)))
        .then(promises => Promise.all(promises))
        .then(names => names
        .forEach(n => console.log(n.name)));