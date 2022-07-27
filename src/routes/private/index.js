import { Router } from 'express';
import { advert } from './advert';
import { cat } from './categories';
import { cmm } from './comments';
import { scat } from './subcat';
import { usrs } from './users';

export const prv = Router();

prv.use('/adverts',advert);
prv.use('/users',usrs);
prv.use('/comments',cmm);
prv.use('/categories',cat);
prv.use('/sub-cat',scat);