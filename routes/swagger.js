const express = require("express")
const router = express.Router()

const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Node JS APIs',
        version: '1.0.0',
      },
    },
    servers:[
        {
            url: 'http://localhost:9000'
        }
    ],
    apis: ['./api_docs/*.js'],
  };

const swaggerSpec = swaggerJSDoc(options)

router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerSpec));

module.exports = router

