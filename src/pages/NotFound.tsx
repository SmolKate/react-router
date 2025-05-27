import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    const onBackHandle = () => navigate(-1)

    return (
        <>
            <div>Нету такого</div>
            <button onClick={onBackHandle}>Вернуться</button>
        </>
    )
}

export default NotFound