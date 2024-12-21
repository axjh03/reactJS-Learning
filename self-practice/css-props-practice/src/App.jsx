import './App.css'


function Wallpaper({image, title}){
  return(
    <>
      <img src={image}></img>
      <h3>{title}</h3>
    </>
  )
}


function App() {
  const aalok = {
    name: "Aalok Jha",
    description: "Aalok Jha is a junior at the University of Texas at Arlington, pursuing a Bachelor of Science in Computer Science. He has developed a diverse skill set, including proficiency in HTML, CSS, JavaScript, Java, C, C++, Node.js, and Python. Alok has applied these skills to various projects, such as creating a real-time messaging app called Ornale using React.js and Firebase, and developing a multiplayer word search game utilizing Java and WebSocket technology. His portfolio and additional information can be found on his personal website.",
    image: "https://alokjha.com.np/media/image2.png"
  };

const images = [
  {
    image:"src/assets/one.jpg",
    title:"One.jpg"
  },{
    image:"src/assets/two.jpg",
    title:"two.jpg"
  },{
    image:"src/assets/three.jpg",
    title:"three.jpg"
  },{
    image:"src/assets/four.jpg",
    title:"four.jpg"
  },{
    image:"src/assets/five.jpg",
    title:"five.jpg"
  },{
    image:"src/assets/six.jpg",
    title:"six.jpg"
  }
]

  return (
    <>
      <div id="whole-app">
        <div class="image-title-description">
          <div id="name-description">
            <h1>{aalok.name}</h1>
            <p>{aalok.description}</p>
          </div>

          <div id="image">
            <img src={aalok.image}></img>
          </div>
        </div>


        <div class="wallpapers">
        <Wallpaper image={images[0].image} title={images[0].title} />
        <Wallpaper image={images[1].image} title={images[1].title} />
        <Wallpaper image={images[2].image} title={images[2].title} />
        <Wallpaper image={images[3].image} title={images[3].title} />
        <Wallpaper image={images[4].image} title={images[4].title} />
        <Wallpaper image={images[5].image} title={images[5].title} />

        </div>
      </div>
    </>

  )
}

export default App
