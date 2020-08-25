import controller from "../../app/controller";

export default class logoutController extends controller{
    index(){
        this.session.destroy();
        this.response.redirect('/');
    }
}