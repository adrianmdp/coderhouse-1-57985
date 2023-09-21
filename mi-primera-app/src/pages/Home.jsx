const Home = () => {
  const myPromise = new Promise((resolve, reject) => {
    // Ir a buscar café
    const success = false;

    if (success) {
      resolve({ name: "Adrián", email: "adrian@coder.com" });
    } else {
      reject("No hay café");
    }
  });

  myPromise
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  //   const traerLibros = async () => {
  //     const response = await fetch("https://url.com");
  //     // if (response.ok) {
  //     //   console.log(response);
  //     // } else {
  //     //   throw new Error("No se pudo traer los libros");
  //     // }
  //   };

  //   try {
  //     const libros = traerLibros();
  //   } catch (error) {
  //     console.log(error);
  //     // advierto al cliente de que hubo un error
  //   }

  fetch()
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Este data son los datos que yo debería mostrar en pantalla
    });

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
