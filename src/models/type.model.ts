import { Model } from 'objection';
import knex from '../knex'
import { subController } from '../subController'

Model.knex(knex)

export class type extends Model {
    //username!: string;

    static get tableName() {
        return 'types';
    }

    static afterInsert({ inputItems }: any) {
        subController.index('type', inputItems[0], 'insert')
      }

    static afterUpdate({inputItems}: any){
    subController.index('type', inputItems[0], 'update')
    }

    static afterDelete(){
    subController.index('type', {}, 'delete')
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