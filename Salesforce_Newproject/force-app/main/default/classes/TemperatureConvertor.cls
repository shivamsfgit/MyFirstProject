public class TemperatureConvertor {
    
    public static Decimal FahrenheitToCelsius(Decimal fh){
        Decimal cs = (fh-32)*5/9;
        System.debug('Temperature in celsius: '+cs.setScale(2));
        return cs.setScale(2);
    }

}