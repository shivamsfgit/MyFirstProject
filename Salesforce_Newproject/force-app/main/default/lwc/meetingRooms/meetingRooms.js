/*This component is a parent component of meetingRoom component. */

import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {

    /*Array to hold different meeting rooms info */
    meetingRoomsInfo = [
        {roomName: 'A-01', roomCapacity: '10' },
        {roomName: 'A-02', roomCapacity: '11' },
        {roomName: 'A-03', roomCapacity: '12' },
        {roomName: 'B-01', roomCapacity: '13' },
        {roomName: 'B-01', roomCapacity: '15' },
        {roomName: 'B-01', roomCapacity: '9' }

    ]; 
    /*Now, we will iterate this array to initialize the meetingRoom from this parent component in our meetingRooms.html
    NOTE: When you use your lightnig=ng web component in other component use kebab-case instead of camelCase(See 
        meetingRooms.html)*/ 
}