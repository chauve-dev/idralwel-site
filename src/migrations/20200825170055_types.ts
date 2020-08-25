import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    knex.schema.createTable('types', t => {
        t.increments('id');
        t.string('nom');
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('types');
}

