const Home: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-r py-8 px-10 text-center rounded-lg shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          ¡Clases de Español en Línea!
        </h2>
        <p className="text-xl md:text-2xl mb-4">
          Descubre el Español con Alegría: Aprende con Amor en Nuestras
          Divertidas Clases por Video Llamada.
        </p>
        <p className="text-xl md:text-2xl">
          Conviértete en un Experto del Idioma con Nuestro Enfoque Cálido y
          Personalizado en Cada Llamada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        <div className="text-center">
          <img
            src="/images/ana.jpeg"
            alt="Ana"
            className="w-48 h-48 mx-auto rounded-full shadow-md"
          />
          <h2 className="text-2xl font-bold mt-4">¡Hola! Soy Ana Laura</h2>
          <p className="text-lg mt-2">
            Profesora de español desde hace tres años. Me considero muy sociable
            y disfruto mucho el contacto con la gente, por eso me dedico a
            enseñar a hablar español.
          </p>
        </div>
        <div className="text-center">
          <img
            src="/images/arms.jpeg"
            alt="Arms"
            className="w-48 h-48 mx-auto rounded-full shadow-md"
          />
          <h2 className="text-2xl font-bold mt-4">
            Es importante que conectemos
          </h2>
          <p className="text-lg mt-2">
            De verdad, ya que hablaremos mucho en las clases. Mi enfoque es
            ayudarte a expresar tu personalidad en español, y para eso, necesito
            que estés dispuesto(a) a hacerlo conmigo.
          </p>
        </div>
        <div className="text-center">
          <img
            src="/images/happy.jpeg"
            alt="Happy"
            className="w-48 h-48 mx-auto rounded-full shadow-md"
          />
          <h2 className="text-2xl font-bold mt-4">No soy partidaria</h2>
          <p className="text-lg mt-2">
            De tener muchos alumnos a la vez. Mi razón es simple: cada persona
            es única, al igual que sus objetivos. Si buscas un contenido
            genérico para todos, tal vez las academias de tu zona sean más
            adecuadas.
          </p>
        </div>
        <div className="text-center">
          <img
            src="/images/man.jpg"
            alt="Man"
            className="w-48 h-48 mx-auto rounded-full shadow-md"
          />
        </div>
        <div className="text-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-48 h-48 mx-auto rounded-full shadow-md"
          />
        </div>
        <div className="text-center">
          <img
            src="/images/rian.jpg"
            alt="Rian"
            className="w-48 h-48 mx-auto rounded-full shadow-md"
          />
        </div>
      </div>

      <div className="p-6 text-gray-800 max-w-4xl mx-auto">
        <p className="mb-4">
          Si deseas aprovechar al máximo tus viajes a España o Latinoamérica, o
          simplemente disfrutas aprender este maravilloso idioma en tu tiempo
          libre, estás en el lugar indicado.
        </p>
        <p className="mb-4">
          Tú estableces la meta y yo te proporciono las herramientas para llegar
          mucho más lejos.
        </p>
        <p className="mb-4">
          Si no soy la persona adecuada para ayudarte, te lo diré directamente.
          Si todo va bien y sientes confianza, y tú quieres más clases y yo
          quiero dártelas, asegurémonos de que conectemos realmente, porque
          hablaremos mucho.
        </p>
        <p className="mb-4">
          Todos tenemos la capacidad de aprender y mejorar, pero a veces,
          necesitamos ayuda externa. Aquí te ofrezco la mía.
        </p>
        <p className="mb-4">
          Si has llegado hasta aquí y crees que lo que estoy diciendo es para
          ti, ¡comencemos!
        </p>
      </div>
    </>
  );
};

export default Home;
