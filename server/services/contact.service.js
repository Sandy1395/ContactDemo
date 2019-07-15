const db = require('../database')

const contactService = {
    async find(params) {
        try {
            let posts = await db.Contacts.findAll({});
            return posts;
        } catch(err) {
            return err;
        }
      
    },
    async get(id, params) {
        try {
            let post = await db.Contacts.findOne({ where: { id: id } })
            if(post) {
                return post
            } else {
                return {}
            }
            
        } catch(err) {
            throw new Error(`Error while fetching post with id ${id}`, err)
        }
    },
    async create(data, params) {
        try {
            const { name, dob, email, budget, gender } = data
            const record = await db.Contacts.create({
                name,
                dob,
                email,
                budget,
                gender 
            })
            return record
        } catch(err) {
            console.log('error', err)
            return err
        }    
    },
    update(id, data, params) {},
    patch(id, data, params) {},
    remove(id, params) {},
    setup(app, path) {}
  }

  module.exports = contactService;