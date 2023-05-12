const express = require('express')
const router = express.Router()
const transporter = require('./../config/transporter.config')

router.get("/", (req, res, next) => {
  res.render("index")
})


router.get("/contacto", (req, res, next) => {
  res.render("contact")
})

router.post("/contacto", (req, res, next) => {

  const { name, subject, email, message } = req.body

  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text: 'Estamos en clase aprendiendo a enviar correos hoy, este es el mensaje: ' + message,
    html: '<p>Estamos en clase aprendiendo <b>a enviar correos</b> y este es el mensaje: ' + message + '</p>'
  })
    .then(info => res.send(info))
    .catch(error => next(error))

})


module.exports = router