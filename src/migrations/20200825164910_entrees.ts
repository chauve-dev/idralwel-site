import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('entrees', t => {
        t.increments('id');
        t.string('image');
        t.string('nom');
        t.string('description');
        t.integer('attaque');
        t.integer('pv');
        t.integer('id_type');
        t.integer('niveau');
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('entrees');
}

