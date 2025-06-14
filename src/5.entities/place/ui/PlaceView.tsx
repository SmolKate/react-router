interface IPlaceViewProps {
    name: string
    type: string
    dimension: string
}

const PlaceView = ({name, type, dimension}: IPlaceViewProps) => (
    <div>
        <h3>{name}</h3>
        <p>Тип: {type}</p>
        <p>Измерение: {dimension}</p>
    </div>
)

export {
    PlaceView
}