import { Router } from 'express'
import { postGroups } from '../controllers/group.controller'

const router = Router()

router.get('/', ) // all Group
router.get('/:id', ) // by id
router.post('/', postGroups ) // create
router.put('/', ) // edit
router.delete('/', ) // delete

export default router