function App() {


  return (
    <>
      <div className="container">
        <h1 className="text-center pt-5">C'è POST per te!</h1>
        <form>
          <input type="text" placeholder="Inserisci nome e cognome o il tuo nome d'arte"/>
          <input type="text" placeholder="Inserisci il titolo del post"/>
          <textarea name="" id="" placeholder="Inserisci il testo del post"></textarea>
          <button>Pubblica</button>
        </form>
      </div>
    </>
  )
}

export default App
