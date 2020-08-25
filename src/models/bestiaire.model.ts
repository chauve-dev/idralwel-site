import { Model } from 'objection';
import knex from '../knex'
import { subController } from '../subController'
import { utilisateur } from './utilisateur.model';
import { entree } from './entree.model';

Model.knex(knex)

export class bestiaire extends Model {
    id_utilisateur!: number;
    id_entree!: number;

    static relationMappings = {
        utilisateur: {
            relation: Model.HasOneRelation,
            modelClass: utilisateur,
            join: {
                from: 'bestiaires.id_utilisateur',
                to: 'utilisateurs.id'
            }
        },
        entree: {
            relation: Model.HasOneRelation,
            modelClass: entree,
            join: {
                from: 'bestiaires.id_entree',
                to: 'entrees.id'
            }
        }
      };

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
            required: ['id_utilisateur', 'id_entree'],
            
            properties: {
                id_utilisateur: {type: 'integer'},
                id_entree: {type: 'integer'}
            }
        }
    }
}