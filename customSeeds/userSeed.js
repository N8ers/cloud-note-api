////////////////////////////////////////////////////////
// destroy existing user table, repopulate user table //
////////////////////////////////////////////////////////

const { development } = require('../knexFile');
const knex = require('knex')(development);

async function seed () {
  console.log('seeding')

  await knex.schema.dropTableIfExists('users');

  await knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('user_name')
  })
  
  const users = await knex('users').insert([
    { user_name: 'Goon'  },
    { user_name: 'Joe'   },
    { user_name: 'Tsuki' },
    { user_name: 'N8'    },
  ]).returning('*')
  console.log('users ', users)
}

seed()
.then(() => {
  console.log('seeding done')
  knex.destroy()
  process.exit()
})
.catch((error) => {
  console.log('error ', error)
  knex.destroy()
  process.exit()
}) 