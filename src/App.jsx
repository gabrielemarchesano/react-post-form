function App() {



  return (
    <>
      <div className="container">
        <header>
          <h1 className="text-center pt-5">C'è POST per te!</h1>
        </header>
        <main className="py-4">
          <form>
            <div>
              <label htmlFor="author">Autore</label>
              <input name="author" type="text" placeholder="Inserisci nome e cognome o il tuo nome d'arte"/>
            </div>
            <div>
              <label htmlFor="title">Titolo</label>
              <input name="title" type="text" placeholder="Inserisci il titolo del post"/>
            </div>
            <div>
              <label htmlFor="text">Testo</label>
              <textarea name="text" id="text" placeholder="Inserisci il testo del post"></textarea>
            </div>
            <div>
              <input type="radio" name="public" id="" />
              <label htmlFor="public">Pubblico</label>
              <input type="radio" name="draft" id="" />
              <label htmlFor="draft">Bozza</label>
              
            </div>
            <button onSubmit={null}>Invia</button>
          </form>
        </main>
      </div>
    </>
  )
}

export default App
