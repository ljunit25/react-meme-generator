import React from "react"
import memeData from '../memeData.js'

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/30b1gx.jpg"
  });
  const [allMemeImages, setAllMemeImage] = React.useState([])

  React.useEffect(()=> {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImage(data.data.memes);
    }
    getMemes();
  }, []);

  function handleClick(){
    const randomNumber = Math.ceil(Math.random() * allMemeImages.length)
    setMeme(oldValue => ({
      ...oldValue,
      url: allMemeImages[randomNumber].url === undefined ? "https://i.imgflip.com/30b1gx.jpg" : allMemeImages[randomNumber].url
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  }

  return (
    <section>
        <div className="form">
          <div className="top">
            <label htmlFor="top-text">Top text</label>
            <input 
              type="text" 
              name="topText" 
              value={meme.topText}
              placeholder="Shut up"
              onChange={handleChange}
            />
          </div>
            
          <div className="botton">
            <label htmlFor="bottom-text">Bottom text</label>
            <input 
              type="text" 
              name="bottomText"
              value={meme.bottomText}
              placeholder="And take my money"
              onChange={handleChange}
            />
          </div>
        </div>

      <button onClick={handleClick}>Get new meme image</button>
      <div className="meme">
        <img className="meme-img" src={meme.url} alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </section>
    
  )
}

export default Meme