const router = require('express').Router()


let places = [{
  name: 'Kamea Poke',
  city: 'Dana Point',
  state: 'CA',
  cuisines: 'Hawaiian, Pan-Asian',
  pic: '/images/poke-eat.jpg'
}, {
  name: 'Compa Victor',
  city: 'Mexicali',
  state: 'Baja California, Mexico',
  cuisines: 'Mexican',
  pic: '/images/compa-victor.jpeg' 
}]
router.get('/',(req, res) => {
    
      
      res.render('places/index', { places })
  })

  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  // SHOW
router.get('/:arrayIndex', (req, res) => {
  res.send(places[req.params.arrayIndex])
})

router.post('/',(req, res) => {
  res.send('post /places stub ')
})
module.exports = router
