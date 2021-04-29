import express from 'express'
import {getMathRoutes} from './math'

function getRoutes() {
  const router = express.Router()
  router.use('/math', getMathRoutes())
  router.use('/health', (req, res) => res.status(200).send('OK'))
  return router
}

export {getRoutes}
