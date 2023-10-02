import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
    const baseUrl = 'https://i.imgur.com/';
    const person = {
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP',
        imageSize: 's',
        theme: {
          backgroundColor: 'black',
          color: 'pink'
        }
    };

    return (
        <>
        <div style={person.theme}>
            <h1>Tareas pendientes de {person.name}</h1>
            <img
            className="avatar"
            src={baseUrl + person.imageId + person.imageSize + '.jpg'} alt="Gregorio Y. Zara" />
            <ul>
            <li>Mejorar el videoteléfono</li>
            <li>Preparar clases de aeronáutica</li>
            <li>Trabajar en el motor de alcohol</li>
            </ul>
        </div>

        <Avatar
            size={100}
            person={{ 
            name: 'Katsuko Saruhashi', 
            imageId: 'YfeOqp2'
            }}
        />
        <Avatar
            size={80}
            person={{
            name: 'Aklilu Lemma', 
            imageId: 'OKS67lh'
            }}
      />
      <Avatar
            size={50}
            person={{ 
            name: 'Lin Lanying',
            imageId: '1bX5QH6'
            }}
      />

    </>
    );
  }