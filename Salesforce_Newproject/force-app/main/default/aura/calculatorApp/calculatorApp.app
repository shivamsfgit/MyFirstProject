<aura:application extends="force:slds">
    <aura:attribute name="num1" type="Integer"></aura:attribute>
	<div class="box">
    	<lightning:card iconName="utility:apps" title="Calculator">
        	<aura:set attribute="actions">
                <lightning:button label="Add" variant="success" iconName="utility:add"/>
                <lightning:button label="Substract" variant="destructive" iconName="utility:dash" />
                <lightning:button label="Multiply" variant="success" iconName="utility:close" />
                <lightning:button label="Divide" variant="destructive" iconName="utility:dash" />
            </aura:set>
            <lightning:input label="Enter value 1" value="{!v.num1}"></lightning:input>
            <lightning:input label="Enter value 2"></lightning:input>
        </lightning:card>
    </div>
</aura:application>