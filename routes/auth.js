/**
 * @swagger
 * components:
 *   schemas:
 *      User:
 *       type: object
 *       required:
 *         - ID
 *         - User
 *         - Password
 *       properties:
 *         ID:
 *           type: integer
 *           description: The auto-generated id of the user.
 *         User:
 *           type: string
 *           description: Username of the user. 
 *         Password:
 *           type: string
 *           description: Password of the user. 
 *       example:
 *         ID: 5
 *         User: Sam
 *         Password: d5fE_asz
 */     
/**
 * @swagger
 * tags:
 *   name: Authenticate 
 *   description: Endpoint for authenticating the cilent to interact with the other endpoints. 
 * /authenticate:
 *   post:
 *     summary: Authenticate client. 
 *     tags: [Authenticate]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error.
 *
 */

module.exports = function(app){
    app.get('/auth', function(req, res){
        console.log("auth");
    });

    //other routes..
}