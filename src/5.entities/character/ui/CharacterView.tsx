interface ICharacterViewProps {
    name: string
    image: string
    status: string
    type?: string
    gender: string
}

const CharacterView = ({name, image, status, type, gender}: ICharacterViewProps) => (
    <div>
        <h3>{name}</h3>
        <img src={image} />
        <p>Статус: {status}</p>
        {type && <p>Тип: {type}</p>}
        <p>Пол: {gender}</p>
    </div>
)

export {
    CharacterView
}