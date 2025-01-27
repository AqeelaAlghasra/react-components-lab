const WeatherData = ({ day, conditions, time }) => {

    return (
        <li>
            <h2>{day}</h2>
            <p>{conditions}</p>
            <p>{time}</p>
        </li>
    )
}

export default WeatherData