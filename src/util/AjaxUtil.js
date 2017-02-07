import ajax from "robe-ajax";

export default class AjaxUtil {
    static expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    static urlPattern = new RegExp(AjaxUtil.expression);
    settings;
    constructor(settings) {
        this.settings = settings;
    }

    getAll(url){
        return ajax.ajax({
            url: this.getUrl(url)
        });
    }
    create(url, data) {
        return ajax.ajax({
            url: this.getUrl(url),
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(data)
        });
    }
    update(url, data, id) {
        return ajax.ajax({
            url: this.getUrl(url) + "/" + id,
            type: "PUT",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(data)
        });
    }
    delete(url, id) {
        return ajax.ajax({
            url: this.getUrl(url) + "/" + id,
            type: "DELETE",
            dataType: "json"
        });
    }

    static isUrl(url){
        return url.match(AjaxUtil.urlPattern) ? true: false;
    }
    getUrl(url){
        if(AjaxUtil.isUrl(url)) return url;
        return this.settings.backendUrl + "/" + url;
    }
}