const { Prisma } = require("@prisma/client");

function errorHandler(error, req, res, next) {

    if (process.env.NODE_ENV !== "production") {

        console.error(error);

    }

    // Prisma
    if (error instanceof Prisma.PrismaClientKnownRequestError) {

        switch (error.code) {

            case "P2002":

                return res.status(409).json({

                    success: false,

                    message: "Esse registro já existe.",

                    campo: error.meta?.target

                });

            case "P2003":

                return res.status(400).json({

                    success: false,

                    message: "Relacionamento inválido."

                });

            case "P2021":

                return res.status(500).json({

                    success: false,

                    message: "Tabela não encontrada."

                });

            case "P2022":

                return res.status(500).json({

                    success: false,

                    message: "Coluna não encontrada."

                });

            case "P2025":

                return res.status(404).json({

                    success: false,

                    message: "Registro não encontrado."

                });

        }

    }

    if (error instanceof Prisma.PrismaClientValidationError) {

        return res.status(400).json({

            success: false,

            message: "Dados enviados são inválidos."

        });

    }

    if (error instanceof Prisma.PrismaClientInitializationError) {

        return res.status(503).json({

            success: false,

            message: "Erro ao conectar com o banco de dados."

        });

    }

    return res.status(500).json({

        success: false,

        message: "Erro interno do servidor."

    });

}

module.exports = errorHandler;