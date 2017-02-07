export default class Arrays {
    static getItemIndexByKey(items, key, keyValue){
        for(let i = 0 ; i < items.length; i++) {
            if(items[i][key] === keyValue) return i;
        }
        return -1;
    }
}