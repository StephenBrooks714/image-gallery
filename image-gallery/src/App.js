import './App.css';
import Cards from './components/Picture'

function App() {
  return (
    <>
        <main className={"container my-5"}>
            <div className={"row text-center align-items-center justify-content-center"}>
                <h1 className={"display-6 mb-5 fw-bold text-center"}>Image Gallery</h1>
                <Cards/>
            </div>
        </main>
    </>
  );
}

export default App;
