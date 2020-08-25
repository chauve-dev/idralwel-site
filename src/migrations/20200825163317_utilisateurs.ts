import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('utilisateurs', t => {
        t.increments('id');
        t.string('uuid');
        t.string('email');
        t.string('pseudo');
        t.string('password');
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('utilisateurs')
}

