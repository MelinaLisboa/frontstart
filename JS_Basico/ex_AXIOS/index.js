axios.get('https://swapi.dev/api/films/').then(response => {
    //console.log(response.data);

    //Listar titulos no console
    const results = response.data.results;
    const listofTitles = results.map(el => el.title);
    console.log(listofTitles);
})