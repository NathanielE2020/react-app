export const isArrayEmpty = (arr) => {
    if(arr !== undefined && arr !== null && arr.length > 0) {
        return false;
    }
    return true;
}

export const dumplogs = (props) => {
    console.log(props);

    //Sends it to tool for tracking
}

//export {isArrayEmpty, dumplogs}