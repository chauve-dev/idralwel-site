import controller from "../../app/controller";

export default class monCompteController extends controller{
    index(){
        this.response.render('mon-compte');
    }
}