/**
 * @swagger
 * /users/all:
 *   get:
 *     summary: See all users.
 *     tags: [Get Users]
 *     description: Use to request all users.
 *     responses:
 *       200:
 *         description: A successfull response.
 */

/**
 * @swagger
 * /user/add:
 *   post:
 *      summary: User registration
 *      tags: [Post Users]
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             firstname:
 *               type: string
 *               required: true
 *             lastname:
 *               type: string
 *               required: true
 *             username:
 *               type: string
 *               required: true
 *             password:
 *               type: string
 *               required: true  
 *      responses:
 *          200:
 *              description: User created successfully.
 */
