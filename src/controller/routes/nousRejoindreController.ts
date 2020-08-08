import controller from "../../app/controller";

export default class nousRejoindreController extends controller{
    index(){
        this.response.render('nous-rejoindre');
    }
}