import express from 'express'
import TasksController from '../controllers/TasksController.js'

const router = express.Router()

import checkAuth from  '../helpers/auth.js'

router.post('/:id/complete', checkAuth, TasksController.completeTask)
router.get('/add', checkAuth, TasksController.createTought)
router.post('/add', checkAuth, TasksController.createToughtSave)
router.get('/edit/:id', checkAuth, TasksController.updateTought)
router.post('/edit', checkAuth, TasksController.updateToughtPost)
router.get('/dashboard', checkAuth, TasksController.dashboard)
router.post('/remove', checkAuth, TasksController.removeTask)
router.get('/', TasksController.showTask)

export default router