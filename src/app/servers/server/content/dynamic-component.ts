import { Component, OnInit, Input, ViewContainerRef, ViewChild, 
  ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import LogComponent from './logs/log.component';
import DeliveryComponent from './deliveries/delivery.component';
import QueueComponent from './queues/queue.component';
@Component({
  selector: 'dynamic-component',
  entryComponents: [ LogComponent, DeliveryComponent, QueueComponent ], 
  // Reference to the components must be here in order to dynamically create them
  template: `
    <div #dynamicComponentContainer></div>
  `,
})
export default class DynamicComponent{
public currentComponent :any ;
  @ViewChild('dynamicComponentContainer',
  { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;
   constructor(private resolver: ComponentFactoryResolver) {    
  }
  // component: Class for the component you want to create
  // inputs: An object with key/value pairs mapped to input name/input value
  @Input() set componentData(data: {component: any, inputs: any }) {
    if (!data) {
      return;
    }

    // Inputs need to be in the following format to be resolved properly
    let inputProviders = Object.keys(data.inputs)
    .map((inputName) => { return { provide: inputName, useValue: data.inputs[inputName] }; });
    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
    
    // We create an injector out of the data we want to pass down and this components injector
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, 
                    this.dynamicComponentContainer.parentInjector);
    
    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(data.component);
    
    // We create the component using the factory and the injector
    let component = factory.create(injector);
    
    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);
    
    // We can destroy the old component is we like by calling destroy
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
    
    this.currentComponent = component;
  }
}
