import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function WeatherCard({ obj }) {
    let HOT = "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31";
    let COLD = "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=1169&auto=format&fit=crop";
    let RAINY = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop";

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 180 }}
                    image={obj.humidity > 80 ? RAINY : obj.Temperature > 15 ? HOT : COLD}
                    title="Weather image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <p>{obj.city}</p>
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary' }}
                        component={"div"}
                    >
                        <p>Temperature: {obj.Temperature}°C</p>
                        <p>Humidity: {obj.humidity}%</p>
                        <p>Max Temp: {obj.max}°C</p>
                        <p>Min Temp: {obj.min}°C</p>
                        <p>
                            The weather can be described as <i>{obj.weather}</i> and feels like {obj.feel}&deg;C
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
