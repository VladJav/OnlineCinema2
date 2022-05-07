function validateMainPath(pathArr){

    if(pathArr.length===2) return true;
    if(pathArr[1]==="page" && !Number.isNaN(pathArr[2]) && pathArr[3]!=="search") return true;
    else return false;
}
export default validateMainPath;