/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'




router.get('/', (ctx: HttpContext) => {
  return ctx.view.render('pages/home', {
    title: 'Home',
  })
})

router.get('/buttons', (ctx: HttpContext) => {
  return ctx.view.render('pages/buttons', {
    title: 'Buttons',
  })
})

router.get('/dropdown', (ctx: HttpContext) => {
  return ctx.view.render('pages/dropdown', {
    title: 'Dropdown',
  })
})

router.get('/typography', (ctx: HttpContext) => {
  return ctx.view.render('pages/typography', {
    title: 'Typography',
  })
})

router.get('/elements', (ctx: HttpContext) => {
  return ctx.view.render('pages/elements', {
    title: 'Elements',
  })
})

router.get('/icons', (ctx: HttpContext) => {
  return ctx.view.render('pages/icons', {
    title: 'Icons',
  })
})

router.get('/tables', (ctx: HttpContext) => {
  return ctx.view.render('pages/tables', {
    title: 'Tables',
  })
})

router.get('/charts', (ctx: HttpContext) => {
  return ctx.view.render('pages/charts', {
    title: 'Charts',
  })
})

router.get('/blank', (ctx: HttpContext) => {
  return ctx.view.render('pages/blank', {
    title: 'Blank Page',
  })
})

router.get('/page_404', (ctx: HttpContext) => {
  return ctx.view.render('pages/page404', {
    title: 'Error 404',
  })
})

router.get('/page_500', (ctx: HttpContext) => {
  return ctx.view.render('pages/page500', {
    title: 'Error 500',
  })
})

router.get('/login', (ctx: HttpContext) => {
  return ctx.view.render('pages/login', {
    title: 'Login',
  })
})


router.get('/register', (ctx: HttpContext) => {
  return ctx.view.render('pages/register', {
    title: 'Register',
  })
})

router.get('/documentation', (ctx: HttpContext) => {
  return ctx.view.render('pages/documentation', {
    title: 'Documentation',
  })
})
