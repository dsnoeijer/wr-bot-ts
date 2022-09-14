const db = require("../models/userModel");

export async function getHomeWidgets {
    db.find(), async (err, docs) => {
        if (err) {
            console.log(err);
            return;
        }

        return docs;
    }
}

module.exports = {
    getHomeWidgets
}