import './App.css'

export function App () {
  return(
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img 
          className="tw-followCard-avatar"
          alt="avatar de prueba" 
          src="https://unavatar.io/banner.png"/>
        <div className="tw-followCard-info">
          <strong>Alejo Flores</strong>
          <span>@aflores123</span>
        </div>
      </header>

      <aside>
        <button>
          Seguir
        </button>
      </aside>
    </article>
  )
}