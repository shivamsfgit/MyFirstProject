public class getterExample {
    //public String city {get; set;} //automated property - doing nothing
    public String result {get; set;}
    
    public String getName(){
        return 'Ranjith';
    }
    
    public String getCity(){ //getter method - perform logic
        //logic
        return 'Chennai';
    }
    
    public void setCountry(String myCnty){
        result = myCnty;
    }
    
    public String getCountry(){
        return result; 
    }
}