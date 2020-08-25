import { Model } from 'objection';
import knex from '../knex'
import { subController } from '../subController'
import { bestiaire } from './bestiaire.model';
import { type } from './type.model';

Model.knex(knex)

export class entree extends Model {
    image!: string;
    nom!: string;
    description!: string;
    attaque!: number;
    pv!: number;
    type!: number;
    niveau!: number;

    static relationMappings = {
        bestiaire: {
            relation: Model.HasOneRelation,
            modelClass: bestiaire,
            join: {
                from: 'entrees.id',
                to: 'bestiaires.id_entree'
            }
        },
        type: {
            relation: Model.HasOneRelation,
            modelClass: type,
            join: {
                from: 'entrees.id_type',
                to: 'types.id'
            }
        }
      };

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
            required: ['image', 'nom', 'description', 'id_type'],
            
            properties: {
                id: {type: 'integer'},
                image: {type: 'string'},
                nom: {type: 'string'},
                description: {type: 'string'},
                attaque: {type: 'integer'},
                pv: {type: 'integer'},
                id_type: {type: 'integer'},
                niveau: {type: 'integer'}
            }
        }
    }
}