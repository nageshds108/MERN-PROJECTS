import TicketNO from "../TicketNO";
import "D:\WEB-T\Lottery Game\src\assets\Ticket.css";

export default function Ticket({ticket}){
    return (
        <>
        <div className="Ticket">
            {ticket.map((num, index) => (
                <TicketNO ticketNumber={num} key={index}/>

            ))}
        </div>
        </>
    );
}