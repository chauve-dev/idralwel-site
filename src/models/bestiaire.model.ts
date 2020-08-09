import { Model } from 'objection';
import knex from '../knex'
import { subController } from '../subController'

Model.knex(knex)

export class bestiaire extends Model {
    //username!: string;

    static get tableName() {
        return 'bestiaires';
    }

    static afterInsert({ inputItems }: any) {
        subController.index('bestiaire', inputItems[0], 'insert')
      }

    static afterUpdate({inputItems}: any){
    subController.index('bestiaire', inputItems[0], 'update')
    }

    static afterDelete(){
    subController.index('bestiaire', {}, 'delete')
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