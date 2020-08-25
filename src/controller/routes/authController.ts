import controller from "../../app/controller";
import { utilisateur } from "../../models/utilisateur.model";
import crypto from 'crypto';
require('dotenv').config()

export default class authController extends controller{
    index(){
        utilisateur.query()
        .where('pseudo', '=', this.request.body.pseudo)
        .where('password', '=', this.salt(this.request.body.password))
        .then((data: any) => {
            if(data.length <= 0){
                this.response.redirect('/?showmodal=true');
            }else{
                this.session.logged = true;
                this.session.userId = data[0]['id'];
                this.response.redirect('/');
            }
        })
    }

    salt(password: string){
        password = process.env.SALT+password+process.env.PEPPER;
        password = crypto.createHash('sha512').update(password).digest('hex');
        return password;
    }
}