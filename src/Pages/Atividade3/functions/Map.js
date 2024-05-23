import { getImageUrl } from './Galery'; // Importando a função getImageUrl

const people = [
    'Creola Katherine Johnson: mathematician', 
    'Mario José Molina—PasqueI Henriquez: chemist',
    'Mohanunad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];
const peopleData = [{
        id: 0,
        name:'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculation',
        imageId: 'MK3eW3A'
    }, {
        id: 1,
        name:'Mario José Molina—PasqueI Henriquez',
        profession: 'chemist',
        accomplishment: 'discover of Arctic ozone hole',
        imageId: 'mynHUSa'
    }, {
        id: 2,
        name: 'Mohanunad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids',
        imageId: 'IOjWm71'
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
}];
export function AllDataList() {
    const ListItems = peopleData.map(person => 
        <li key={person.id}>
            <img 
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' [' + person.profession + '] '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    return (
        <ul>{ListItems}</ul>
    );
}
export function DataList() {
    const chemists = peopleData.filter(person => person.profession === 'chemist');

    const ListItems = chemists.map(person => 
        <li key={person.id}>
            <img 
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' [' + person.profession + '] '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    return (
        <ul>{ListItems}</ul>
    );
}
export default function List() {
    const ListItems = people.map((person, index) => <li key={index}>{person}</li>);
    return (
        <ul>{ListItems}</ul>
    );
}
