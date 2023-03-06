public with sharing class pincodeController {

    @AuraEnabled
    public static String callPinCodeApi(String pincode){
            HttpRequest request = new HttpRequest();
            request.setEndpoint('https://api.postalpincode.in/pincode/'+pincode);
            System.debug(pincode);
            request.setMethod('GET');
            
            Http hp = new Http();
            HttpResponse res = hp.send(request);
            //String jsonString = res.getBody();
            System.debug(res.getBody());
            //return res.getBody();
        	JSONParser jp = JSON.createParser(res.getBody());
        	String location;
        	while(jp.nextToken() != null) {
                if(jp.getCurrentToken() == JSONToken.FIELD_NAME && jp.getText() == 'District'){
                    jp.nextToken();
                    location = jp.getText();
                    System.debug(location);
                }
        }
        if(string.isBlank(location)){
            location = 'not valid';
        }
        return location;
    }
}