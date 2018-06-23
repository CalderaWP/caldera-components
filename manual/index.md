# Caldera Components

## Goals
* Have a repeatable systems for creating fields and field configuration for the Caldera Forms admin interface.
* Have a factory that can consume a configuration like [the PHP class `Caldera_Forms_Processor_UI`](https://calderaforms.com/doc/creating-caldera-forms-processors-using-caldera_forms_processor_processor-class/) but beacuse the factory runs client-side, they can update in real time.
* Wrap this in [a processor UI library](https://github.com/CalderaWP/caldera-processors) that can dynamically generate processor configs, using an array managed by redux.


## Structure of class attributes

The goal is to always get these classes from the `RenderGroup`'s property `classNames`. That's currently partially true. This SHOULD be the single source of truth for classNames that are universally applied to these types of elements.

```html
<div class="caldera-config-field-setup">
    <div class="caldera-config-group ">
        <label 
            for="example-1">
                First Name
        </label>
        <div class="caldera-config-field ">
            <input 
                type="text" 
                id="example-1"
                class="block-input field-config  required"
             />
        </div>
    </div>
    <div class="caldera-config-group">
        <label 
            for="example-2">
                Last Name
        </label>
        <div class="caldera-config-field ">
            <input 
                type="text" 
                id="example-2"
                class="block-input field-config required"
             />
        </div>
    </div>
    <div class="caldera-config-group">
    		<fieldset>
    			<legend>
    			    Humanoid? Check All That Apply
                </legend>
    			<div class="caldera-config-field">
    				<label for="organic-human">
    				    Organic Human
    				</label>
                    <input 
                        id="organic-human" 
                        type="checkbox" 
                        class="field-config"
                    />
                    <label for="andorid">
                        Humanoid Android
                    </label>
                    <input 
                        id="andorid" 
                        type="checkbox" 
                        class="field-config"
                    />
                    <label for="alien">
                       Humanoid Alien
                    </label>
                    <input 
                        id="alien" 
                        type="checkbox" 
                        class="field-config"
                    />
    			</div>
    		</fieldset>
    	</div>
</div>

```



