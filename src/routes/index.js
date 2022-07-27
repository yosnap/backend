import { Router } from 'express';
import { getAdverts } from '../controllers/adverts';
import { getCategories , getCategory } from '../controllers/categories';
import { getComment , getComments } from '../controllers/comments';
import { getSubCategories , getSubCategory } from '../controllers/subcategories';
import { signIn, signUp } from '../controllers/users';
import { checkToken } from '../middlewares/Auth';
import { prv } from './private';

export const api = Router();

//RUTAS PUBLICAS

//--ROUTER AUTH
api.use('/api',checkToken,prv);
//--SESSION
api.post('/signin',signIn);
api.post('/signup',signUp);
//--SOLICITUDES Y SERVICIOS
api.get('/adverts',getAdverts);
//--CATEGORIAS
api.get('/categories',getCategories);
api.get('/category/:id',getCategory);
//--SUB CATEGORIAS
api.get('/subcats',getSubCategories);
api.get('/subcat/:id',getSubCategory);
//COMENTARIOS
api.get('/comments',getComments);
api.get('/comment:id',getComment);
