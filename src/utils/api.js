function getPlayer(title,year){
    return fetch(`https://kinobd.ru/api/films/search/title?q=${title}`)
        .then(res => res.json())
        .then(
            (result) => {
                let resultData = result.data;
                for(let i=0;i<resultData.length;++i){
                    if(resultData[i].year==year){
                        return resultData[i].kinopoisk_id;
                    }
                }
            },
            (error) => {
            }
        )
}
export default getPlayer;