import controller from "../../app/controller";

export default class encyclopedieController extends controller{
    index(){
        this.response.render('encyclopedie');
    }
}