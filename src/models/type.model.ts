import { Model } from 'objection';
import knex from '../knex'
import { subController } from '../subController'
import { entree } from './entree.model';

Model.knex(knex)

export class type extends Model {
    nom!: string;

    static relationMappings = {
        entree: {
            relation: Model.HasManyRelation,
            modelClass: entree,
            join: {
                from: 'types.id',
                to: 'entrees.id_type'
            }
        }
    }

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
                id: {type: 'integer'},
                nom: {type: 'string'}
            }
        }
    }
}