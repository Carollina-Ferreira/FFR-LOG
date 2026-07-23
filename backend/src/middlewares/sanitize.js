const validator = require("validator");

function sanitize(req, res, next) {

    if (!req.body) {

        return next();

    }

    const data = req.body;

    Object.keys(data).forEach((key) => {

        if (typeof data[key] === "string") {

            data[key] = data[key].trim();

            data[key] = data[key].replace(/\s+/g, " ");

            data[key] = validator.escape(data[key]);

        }

    });

    if (data.email) {

        data.email = data.email.toLowerCase();

    }

    if (data.telefone) {

        data.telefone =
            data.telefone.replace(/\D/g, "");

    }

    next();

}

module.exports = sanitize;