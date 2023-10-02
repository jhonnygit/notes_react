function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
}

export default function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
      <div>
        <Button onClick={onPlayMovie}>
          Reproducir película
        </Button>
        <Button onClick={onUploadImage}>
          Cargar imagen
        </Button>
      </div>
    );
  }