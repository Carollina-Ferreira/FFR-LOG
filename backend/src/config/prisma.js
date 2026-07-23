const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({

    log: [

        {
            emit: "event",
            level: "error"
        },

        {
            emit: "event",
            level: "warn"
        }

    ]

});

prisma.$on("error", (e) => {

    console.error("❌ Prisma Error:", e);

});

prisma.$on("warn", (e) => {

    console.warn("⚠ Prisma Warning:", e);

});

module.exports = prisma;