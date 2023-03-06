@isTest
public class TemperatureConvertorTest {

    @isTest static void testWarmTemp(){
        Decimal celsius = TemperatureConvertor.FahrenheitToCelsius(72);
        System.assertEquals(22.22, celsius);
    }    
    
    @isTest static void testFreezingTemp(){
        Decimal celsius = TemperatureConvertor.FahrenheitToCelsius(32);
        System.assertEquals(0, celsius);
    }  
    
    @isTest static void testNegativeTemp(){
        Decimal celsius = TemperatureConvertor.FahrenheitToCelsius(10);
        System.assertEquals(-12.22, celsius);
    }    
    
    @isTest static void testBoilingTemp(){
        Decimal celsius = TemperatureConvertor.FahrenheitToCelsius(212);
        System.assertEquals(100, celsius, 'Boiling point temperature is not expected');
         //"Boiling point temperature is not expected" is the customised message that we want to show if this method fails.
    }    

}