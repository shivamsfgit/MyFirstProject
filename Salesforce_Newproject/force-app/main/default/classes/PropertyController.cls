public class PropertyController {
    public String name {get; set; } // readable - writeable
    public String city {get; set; }
    public String company {get; set; }
    public Boolean experienced {get; set;}
    
    public PropertyController(){ // new PropertyController()
        name = 'Ranjith';
        city = 'Chennai';
        company = 'CTS';
        experienced = true;
    }
}