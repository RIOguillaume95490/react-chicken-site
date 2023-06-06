import './ChickenCard.css'

const chickenList = [
  {
    name: "Le parrain",
    imgSrc:
    "https://images.pexels.com/photos/458825/pexels-photo-458825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    citations: "Je suis loin d'être mafieux, mais j'agirai comme un parrain si tu touches à mes poulettes!!!."
  },
  {
      name: "la maitresse",
      imgSrc:
      "https://images.pexels.com/photos/15879767/pexels-photo-15879767/free-photo-of-mode-main-eau-ete.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      citations: "Ouuuups je voulais trouver une poule de luxe mais il y'a plusieurs interpretations!!!"
    },
    {
      name: "La fille du parrain",
      imgSrc:
      "https://images.pexels.com/photos/5302686/pexels-photo-5302686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      citations: "oui oui oui oui c'est pas une poule mais elle a été adoptée!!!"
    },
    {
      name: "la marraine",
      imgSrc:
      "https://cdn.pixabay.com/photo/2018/10/12/00/08/chicken-3741195_1280.jpg",
      citations: "vous avez peur de mon mari??? Alors imaginez que c'est moi qui décide à la maison!!!"
    },
    {
      name: "commissaire poulet",
      imgSrc:
      "https://images.unsplash.com/photo-1471623817296-aa07ae5c9f47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      citations: "huuuuuuum il faut absolument que l'on retrouve le coupable de cet horrible meurtre..."
    },
    {
      name: "la victime du parrain",
      imgSrc:
      "https://cdn.pixabay.com/photo/2010/12/10/08/chicken-nuggets-1108_1280.jpg",
      citations: "C'est insoutenable ce meurtre est hooooooorrrrriiiiible!!!!"
    },
    {
      name: "le poulet de main ",
      imgSrc:
      "https://img.freepik.com/photos-premium/coq-va-au-poulailler-dans-village_231786-547.jpg?w=826",
      citations: "Si il y'a un problème a régler c'est moi que l'on envoi!!!"
    },
    {
      name: "l'inconnue",
      imgSrc:
      "https://cdn.pixabay.com/photo/2015/09/25/17/02/chicken-957795_1280.jpg",
      citations: "Il fallait une huitième image du coup je ne dévoilerai pas mon identité HA! HA! HA!"
    },
];


const ChickenCard = ()=> {

  return(
    <>
    {chickenList.map((object) =>(
      <div className='card'>
      <div key={object.name}>
      <figcaption>{object.name}</figcaption>
      <img src={object.imgSrc} alt={object.name} />
      <p>{object.citations}</p>
      </div>
      </div>
    ))}
  </>
    )}
  
  export default ChickenCard;