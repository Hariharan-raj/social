import express from 'express';


import loginRouter from './login.js'

const router = express.Router()

export default(app) => {
    app.use('/Number',loginRouter);
}
