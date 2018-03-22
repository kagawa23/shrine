export default class Utils {
    static getThumbnail(snapshot){
        let { url } = snapshot;
        return {
            text: '',
            src: url.replace(/(https?:)?/g,''),
        }
    }
}