import controllerMiddelware from "../../app/controllerMiddleware";

export default class indexController extends controllerMiddelware{
    index(){
        this.next();
    }
}