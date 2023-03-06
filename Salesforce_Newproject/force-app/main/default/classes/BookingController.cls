public class BookingController {
    @AuraEnabled
    public static List<Booking__c> getBooking() {
        return [SELECT Name, Customer__r.Id, Customer__r.Name,Booking_Date_Time__c, Service_Type__c,Issue__c
                FROM Booking__c ORDER BY LastModifiedDate];
    }
}