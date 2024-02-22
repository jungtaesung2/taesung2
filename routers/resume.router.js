const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
const jwtwebToken = require('jsonwebtoken');
const jwtvalitate = require('../middleware/jwt-validate.middleware').default;

const resumeController = new ResumeController();

router.post('/resumes', resumeController.createResumes)

router.post('/resumes', resumeController.getResumes)

module.express = router

