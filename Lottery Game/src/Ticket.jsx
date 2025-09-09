import "./Ticket.css"
import TicketNo from "./TicketNo";

export default function Ticket({num}) {
    return (
        <div className="ticket">
            <p>Ticket</p>
         {num.map((n, index) => (
                <TicketNo key={index} num={n} />
            ))} 
        </div>
    );
}