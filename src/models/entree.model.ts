import { Model } from 'objection';
import knex from '../knex'
import { subController } from '../subController'

Model.knex(knex)

export class entree extends Model {
    //username!: string;

    static get tableName() {
        return 'entrees';
    }

    static afterInsert({ inputItems }: any) {
        subController.index('entree', inputItems[0], 'insert')
      }

    static afterUpdate({inputItems}: any){
    subController.index('entree', inputItems[0], 'update')
    }

    static afterDelete(){
    subController.index('entree', {}, 'delete')
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