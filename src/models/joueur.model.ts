import { Model } from 'objection';
import knex from '../knex'
import { subController } from '../subController'

Model.knex(knex)

export class joueur extends Model {
    //username!: string;

    static get tableName() {
        return 'joueurs';
    }

    static afterInsert({ inputItems }: any) {
        subController.index('joueur', inputItems[0], 'insert')
      }

    static afterUpdate({inputItems}: any){
    subController.index('joueur', inputItems[0], 'update')
    }

    static afterDelete(){
    subController.index('joueur', {}, 'delete')
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            
            properties: {
                id: {type: 'integer'}
            }
        }
    }
}