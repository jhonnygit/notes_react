//import logo from './logo.svg';
import './App.css';
import Toolbar from './component/botones';
import Gallery from './component/gallery';
import List from './component/Listas';
import Galleryfotos from './component/galeriafotos';
import ListArray from './component/agregararray';
import ListEliminar from './component/eliminarArray';
import ShapeEditor from './component/transformarArraz';
import CounterList from './component/remplazarArray';
import ListInsertar from './component/insertarArray';
import ListInvertido from './component/invertirArray';
import BucketList from './component/buckertList';
import ShoppingCart from './component/shoppingCart';
import TaskApp from './component/Compras';
import Form from './component/EstadoBoton';
import Registro from './component/Registro';
import Accordion from './component/Acordion';
import Messenger from './component/messenger';


function Item({name,isPacked}) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + " ✔"}
      </del>
    );
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Gallery />
        <List />
        <ListArray />
        <ListEliminar />
        <CounterList />
        <ListInsertar />
        <ListInvertido />
        <BucketList />
        <ShoppingCart />
        <TaskApp />
        <Form />
        <Registro />
        <Accordion />

        <Messenger />
       
        <div className='page'>
        <Galleryfotos />        
        </div>
      </header>
        <Toolbar
          onPlayMovie={() => alert('¡Reproduciendo!')}
          onUploadImage={() => alert('¡Cargando!')}
        />
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
    </section>
    <section>
    
          <ShapeEditor />
        
    </section>
    </div>
  );
}

export default App;
