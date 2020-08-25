import controllerMiddelware from "../../app/controllerMiddleware";

export default class authController extends controllerMiddelware{
    index(){
        console.log('[MiddleWare] >>> Auth');
        this.next();
    }
}