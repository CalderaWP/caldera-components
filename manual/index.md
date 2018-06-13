# Caldera Components

## Goals
* Have a repeatable systems for creating fields and field configuration for the Caldera Forms admin interface.
* Have a factory that can consume a configuration like [the PHP class `Caldera_Forms_Processor_UI`](https://calderaforms.com/doc/creating-caldera-forms-processors-using-caldera_forms_processor_processor-class/) but beacuse the factory runs client-side, they can update in real time.
* Wrap this in a processor UI library that can dynamically generate processor configs, using an array managed by redux.

