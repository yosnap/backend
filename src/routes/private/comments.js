import { createComment, deleteComment, updateComment } from '../../controllers/comments';
import { Router } from 'express';
import { DevRole } from '../../middlewares/Roles';

export const cmm = Router();

cmm.post('/new',createComment);
cmm.delete('/:id',DevRole,deleteComment);
cmm.put('/:id',DevRole,updateComment);