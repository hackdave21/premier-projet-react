
import './App.css'

// l'interpolation
const title = "Bonjour les gens"
const stylepara = {backgroundColor: 'blue', color: 'white'}
const showTitle = false //à true le titre serait visible
const affichageParagraphe =  true //à false le titre sera remplacé par le paragraphe

const fruits = ['mangue', 'orange', 'banane']


function App() {

  const leCliqueur = (e) => {
    console.log(e)
    alert ("J'ai cliqué sur le titre 2")
  }
  return <div>

    {/* affichage du titre */}
    <TitreDav color= 'green'/>

    {/* l'interpolation d'une variable et d'une balise titre à la couleur rouge */}
   {showTitle && <h1 id='title' className='classtitle' style={{color : "red"}}>{title}</h1>} 
   
   {/* titre avec un evenement dont la fonction est déclarer dans la fonction App
   qui affiche un evenement de manière générique
   */}
     <h2 onClick={leCliqueur} >clique sur le titre</h2>
     
      {/*paragraphe avec un style dont la veriable est declaré hors de la fonction App  */}
    <p style={stylepara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat a minus assumenda molestiae magnam 
      alias odio veniam tenetur, quibusdam repellat vero sit 
      voluptas unde dignissimos fugit provident natus cupiditate!</p>
      <img src="/react.svg" alt="logo react" />

    {
    affichageParagraphe ? 
    <h4>le titre remplaçant le paragraphe</h4> : 
    <p> <strong>le paragraphe</strong> en question</p> 
    }  

    {/* affichage des fruits de la liste */}
    <ul>
      {fruits.map(elmtFruit =>  (<li key={elmtFruit}> {elmtFruit} </li>))}
    </ul>
  </div> 
}

function TitreDav ({color}) {
  // console.log(couleur)
  return <h5 style={{color : color}}>affichage du titre pour l'appeler dans la fonction principale</h5>
}

export default App
