const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getComments(id){
    const rows = await db.query(
        `SELECT Comments_id, Comment_Title, Comment_Text, Comment_own, posts_id
        FROM comments
        WHERE posts_id = ${id}
        `
    );
    const data = helper.emptyOrRows(rows);


    return {
        data
    }

}

module.exports = {
    getComments
}
