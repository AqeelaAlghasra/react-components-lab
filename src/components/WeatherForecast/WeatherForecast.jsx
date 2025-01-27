import WeatherIcon from './WeatherIcon'
import './WeatherForecast.css'

const WeatherForecast = ( {day, img, alt, conditions, time}) => {
  return (
<div className="weather">
<h2>{day}</h2>
<WeatherIcon src={img} alt={alt} />
<p><span>conditions: </span>{conditions}</p>
<p><span>time: </span>{time}</p>
</div>
  )
}

export default WeatherForecast;