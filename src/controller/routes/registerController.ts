import controller from "../../app/controller";
import { utilisateur } from "../../models/utilisateur.model"
import crypto from 'crypto';
require('dotenv').config()

export default class registerController extends controller{
    index(){
        const pseudo: string = this.request.body.pseudo;
        const email: string = this.request.body.email.toLowerCase();
        const password: string = this.request.body.password;
        if(pseudo.replace(' ', '') != '' && email.replace(' ', '') != '' && password.replace(' ', '') != ''){
            this.register(pseudo, email, password, (err: boolean) =>{
                if(err){
                    this.response.redirect('/?error=true');
                }else{
                    this.response.redirect('/');
                }
            });
        }else{
            this.response.redirect('/?error=true');
        }
    }

    register(pseudo: string, email: string, password: string, callback: (err: boolean) => void){
        if(this.checkEmail(email)){
            utilisateur.query().insert(
                {
                    pseudo: pseudo,
                    email: email,
                    password: this.salt(password)
                }
            ).then(() => {
                callback(false);
            }).catch(() => {
                callback(true);
            })
        }else{
            callback(true);
        }
    }

    salt(password: string){
        password = process.env.SALT+password+process.env.PEPPER;
        password = crypto.createHash('sha512').update(password).digest('hex');
        return password;
    }

    checkEmail(email: string){
        const re: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email);
    }

}