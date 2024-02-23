import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <h1>Mis desarrolladores favoritos son:</h1>
      <Card
        title="Brais Moure"
        imageUrl="https://yt3.googleusercontent.com/ytc/AIf8zZQQKFWZCAt-QVvEKVd2491u0otSPuY-kOYTnK14DQ=s176-c-k-c0x00ffffff-no-rj"
        body="Es ingeniero de software y actualmente trabaja como freelance full-stack developer iOS y Android. Además, crea contenido formativo sobre programación en redes."
        linkedin="https://www.linkedin.com/in/braismoure/"
        youtube="https://www.youtube.com/@mouredev"
        twitter="https://twitter.com/MoureDev"
      />

      <Card
        title="Nicolás Schürmann"
        imageUrl="https://media.licdn.com/dms/image/D5603AQEvM-ZZFtoJow/profile-displayphoto-shrink_400_400/0/1669322516183?e=1714003200&v=beta&t=EDnIWVc-9YmB8UPxLrsiO7PIqNLy4z3AwnxnAS_gP0w"
        body="Es ingeniero de software chileno que vive en Nueva Zelanda, encontro su pasión en ayudar a ingenieros novatos, profesionales y aspirantes en mejorar sus habilidades, ganar más dinero, conocer su verdadero valor y finalmente mejorar su calidad de vida."
        linkedin="https://www.linkedin.com/in/nicolasschurmann/?originalSubdomain=nz"
        youtube="https://www.youtube.com/c/HolaMundoDev"
        twitter="https://twitter.com/_nasch_?lang=es"
      />

      <Card
        title="Diego De Granda"
        imageUrl="https://media.licdn.com/dms/image/C5603AQGaORxPeJxPUg/profile-displayphoto-shrink_200_200/0/1637604185919?e=2147483647&v=beta&t=2nMSQyO9B4ReykbUPAfWAMJe4ELjE-x-RcHqaIaWPj4"
        body="es un experto en desarrollo web y de producto con más de 12 años de experiencia en la industria. Su pasión por el emprendimiento y la innovación lo ha llevado a convertirse en un destacado miembro del programa de Google Developer Expert. Además, es un Design Sprint Master certificado por Google, lo que lo convierte en un referente en el campo de la tecnología."
        linkedin="https://mx.linkedin.com/in/diegodegranda"
        youtube="https://www.youtube.com/c/DiegoDeGranda"
        twitter="https://twitter.com/degranda10?lang=es"
      />
    </div>
  );
}

export default App;
