import controller from "../../app/controller";

export default class indexContoller extends controller{
    index(){
        this.response.render('index', {logged: this.session.logged||false});
    }
}