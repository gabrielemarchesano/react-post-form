import { useState } from "react";

function App() {

  const postEndpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    text: "",
    checked: "to_public"
  });


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
              <input 
                name="author" 
                type="text" 
                value={formData.author}
                onChange={(event) => setFormData({...formData, author: event.target.value})}
                placeholder="Inserisci nome e cognome o il tuo nome d'arte"
              />
            </div>
            <div>
              <label htmlFor="title">Titolo</label>
              <input 
                name="title" 
                type="text" 
                onChange={(event) => setFormData({...formData, title: event.target.value})}
                placeholder="Inserisci il titolo del post"
              />
            </div>
            <div>
              <label htmlFor="text">Testo</label>
              <textarea 
                name="text" 
                id="text" 
                value={formData.text}
                onChange={(event) => setFormData({...formData, text: event.target.value})}
                placeholder="Inserisci il testo del post"
              />
            </div>
            <div>
              <input 
                type="radio" 
                name="public" 
                id="public" 
                value="to_public"
                checked={formData.checked === "to_public"}
                onChange={(event) => setFormData({...formData, public: event.target.value})}
                />
              <label htmlFor="public">Pubblico</label>
              <input 
                type="radio" 
                name="public" 
                id="draft" 
                value="to_draft"
                checked={formData.checked === "to_draft"}
                onChange={(event) => setFormData({...formData, public: event.target.value})}
              />
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
