/* The limitation of private properties is that they can only be accessed by the same component i.e the controller 
and template file of the same component.They can't be accessed outside the component.

So, in LWC we have public properties as well which can be supplied by a parent component and also can be accessed
outside the same component. To declare a public property we have to decorate it with @api decorator.

A component that declares a public property can set only its default value and can't modify it later on.
Public property's value should come from parent component. */


import { LightningElement,api} from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo; //{roomName: 'A-01', roomCapacity: '10' }

}