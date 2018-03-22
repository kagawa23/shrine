const FP_MIDDLEWARE_API_SERVER = "https://uat-rendermw.shejijia.com";

export default class FPMiddlewareService {
    static getImageInfo(imageType, startIndex = Infinity, limit = 12) {
        const url = `${FP_MIDDLEWARE_API_SERVER}/api/renderjobmanager/v2.0/querySnapshots/e05d9bc2-4427-4bd7-a446-7fb61601ba36?renderingType=${imageType}&limit=${limit}`;
        if (startIndex !== Infinity) {
            url.concat(`&startIdx=${ startIndex }`);
        }
        return fetch(url).then(res => res.json());
    }   
}