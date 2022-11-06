/* eslint-disable prettier/prettier */
import { Router } from 'express'
import {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} from '../../models/persons'

const router = Router()

router.get('/', (req, res) => {
  const persons = getPersons()
  res.send(persons)
})

router.get('/:id', (req, res) => {
  const person = getPerson(req.params.id)
  res.send(person)
})

router.post('/', (req, res) => {
  const newPerson = createPerson(req.body)
  res.send(newPerson)
})

router.put('/:id', (req, res) => {
  const updatedPerson = updatePerson(req.params.id, req.body)
  if (updatedPerson) {
    res.send(updatedPerson)
  }
})

router.delete('/:id', (req, res) => {
  const deleted = deletePerson(req.params.id)
  if (deleted) {
  res.send({ msg: `Person ${req.params.id} Deleted` })
  }
})
export default router