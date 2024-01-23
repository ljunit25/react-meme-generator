import React from "react"
import memeData from '../memeData.js'

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/30b1gx.jpg"
  })
  const [allMemeImages, setAllMemeImage] = React.useState(memeData)

  function handleClick(){
    const randomNumber = Math.ceil(Math.random() * allMemeImages.data.memes.length)
    setMeme(oldValue => ({
      ...oldValue,
      url: allMemeImages.data.memes[randomNumber].url
    }))
  }

  return (
    <section>
        <div className="form">
          <div className="top">
            <label htmlFor="top-text">Top text</label>
            <input type="text" name="top-text" placeholder="Shut up" />
          </div>
            
          <div className="botton">
            <label htmlFor="bottom-text">Bottom text</label>
            <input type="text" name="bottom-text" placeholder="And take my money" />
          </div>
        </div>

      <button onClick={handleClick}>Get new meme image</button>
      <div className="meme">
        <img className="meme-img" src={meme.url} alt="" />
      </div>
    </section>
    
  )
}

export default Meme