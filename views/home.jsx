const React = require('react')
const Def = require('../default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
               <div>
                 <img src="/images/poke-bowl.jpg" width="500" height="300" alt="Poke Bowl"/>
                 <div>
                  Photo by <a href="https://unsplash.com/@phanhfank?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Miu Sua</a> on <a href="https://unsplash.com/s/photos/poke-bowl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                 </div>
               </div>
                <a href="/places">
                  <button className="btn btn-primary">Places Page</button>
                </a>

          </main>
      </Def>
    )
  }
  
  
  

module.exports = home
