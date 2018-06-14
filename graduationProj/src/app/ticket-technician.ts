import { Data } from "@angular/router/src/config";

export class TicketTechnician {
    constructor(
    public Ticket_Id:number,
    public Ticket_Name:string,
    public Ticket_date:Data,
    public Description:string,
    public ClientName:string,
    public User_id:string,
    public UserName:string,
    public SLA_Id:number,
    public SLA_name:string
    ){}
}
