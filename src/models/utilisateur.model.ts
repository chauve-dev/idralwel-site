import { Model } from 'objection';
import knex from '../knex';
import { subController } from '../subController';
import { bestiaire } from './bestiaire.model';

Model.knex(knex)

export class utilisateur extends Model {
    uuid!: string;
    email!: string;
    pseudo!: string;
    password!: string;

    static relationMappings = {
        bestiary: {
          relation: Model.HasOneRelation,
          modelClass: bestiaire,
          join: {
            from: 'utilisateurs.id',
            to: 'bestiaires.id_utilisateur'
          }
        }
      };

    static get tableName() {
        return 'utilisateurs';
    }

    static afterInsert({ inputItems }: any) {
        subController.index('utilisateur', inputItems[0], 'insert')
      }

    static afterUpdate({inputItems}: any){
        subController.index('utilisateur', inputItems[0], 'update')
    }

    static afterDelete(){
        subController.index('utilisateur', {}, 'delete')
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['email', 'pseudo', 'password'],
            
            properties: {
                id: {type: 'integer'},
                uuid: {type: 'string', minLength: 36, maxLength: 36},
                email: {type: 'string', minLength: 3, maxLength: 50},
                pseudo: {type: 'string', minLength: 3, maxLength: 50},
                password: {type: 'string', minLength: 128, maxLength: 128}
            }
        }
    }
}