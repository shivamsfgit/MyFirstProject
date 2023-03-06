import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = "BMI Calculator";

    height;
    weight;
    bmi;

    changeWeightHandler(event){
        this.weight = parseFloat(event.target.value);
    }

    changeHeightHandler(event){
        this.height = parseFloat(event.target.value);
    }

    calculateBmi(){
        try{
            this.bmi = this.weight/(this.height*this.height);
        }catch(error){
            this.bmi = undefined;
        }
    }
}

/*                                     OR

import { LightningElement,track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = "BMI Calculator";

    @track bmiData={
        height:0,
        weight:0,
        result:0
    };
    

    changeWeightHandler(event){
        this.bmiData.weight = parseFloat(event.target.value);
    }

    changeHeightHandler(event){
        this.bmiData.height = parseFloat(event.target.value);
    }

    calculateBmi(){
        try{
            this.bmiData.result = this.weight/(this.height*this.height);
        }catch(error){
            this.bmiData.result = undefined;
        }
    }
}


bmiCalculator.html

<template>
    <lightning-card title={cardTitle}>
        <lightning-input type="number" step="0.01" label="Weight in Kg" onchange={changeWeightHandler}></lightning-input>
        <lightning-input type="number" step="0.01" label="Height in metre" onchange={changeHeightHandler}></lightning-input>
        <lightning-button label="Get BMI" onclick={calculateBmi}></lightning-button>

        <p>
            Your BMI is : {bmiData.result}
        </p>
    </lightning-card>
</template>
*/