interface IEpisodeViewProps {
    name: string
    air_date: string
    episode: string
}

const EpisodeView = ({ name, air_date, episode}: IEpisodeViewProps) => (
    <div>
    <h3>{name}</h3>
    <p>Дата выхода на экран: {air_date}</p>
    <p>Серия: {episode}</p>
</div>
)

export {
    EpisodeView
}