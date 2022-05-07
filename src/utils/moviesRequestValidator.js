
function moviesRequestValidator(resArr,genresById){

    let ids = Object.keys(genresById);
    let arrayOfElementsToDelete = [];
    for(let i = 0; i<resArr.length;i++){
        const containsAll = resArr[i].genre_ids.every(element =>{
            return ids.includes(String(element));
        });
        if(!containsAll || !resArr[i].genre_ids.length || !Boolean(resArr[i].overview)){
            arrayOfElementsToDelete.push(resArr[i]);
        }
    }
    const s = new Set(arrayOfElementsToDelete.map(e => JSON.stringify(e)));
    return resArr.filter(e => !s.has(JSON.stringify(e)));
}
export default moviesRequestValidator;