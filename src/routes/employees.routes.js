import { Router } from 'express';
import {getEmployees,createEmployee,updateEmployee,deleteEmployee,getEmployee} from '../controllers/employees.controllers.js'

const router = Router();

router.get("/employees",getEmployees)
router.get("/employees/:id",getEmployee)
router.post("/employees",createEmployee)
router.patch("/employees/:id",updateEmployee) //a diferencia de puts, patch es para actualizar solo un dato
router.delete("/employees/:id",deleteEmployee)

export default router