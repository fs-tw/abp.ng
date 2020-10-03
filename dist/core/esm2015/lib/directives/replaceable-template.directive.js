import { ComponentFactoryResolver, Directive, Injector, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import compare from 'just-compare';
import { filter } from 'rxjs/operators';
import snq from 'snq';
import { ReplaceableComponentsService } from '../services/replaceable-components.service';
import { SubscriptionService } from '../services/subscription.service';
export class ReplaceableTemplateDirective {
    constructor(injector, templateRef, cfRes, vcRef, replaceableComponents, subscription) {
        this.injector = injector;
        this.templateRef = templateRef;
        this.cfRes = cfRes;
        this.vcRef = vcRef;
        this.replaceableComponents = replaceableComponents;
        this.subscription = subscription;
        this.providedData = { inputs: {}, outputs: {} };
        this.context = {};
        this.defaultComponentSubscriptions = {};
        this.initialized = false;
        this.context = {
            initTemplate: ref => {
                this.resetDefaultComponent();
                this.defaultComponentRef = ref;
                this.setDefaultComponentInputs();
            },
        };
    }
    ngOnInit() {
        const component$ = this.replaceableComponents
            .get$(this.data.componentKey)
            .pipe(filter((res = {}) => !this.initialized || !compare(res.component, this.externalComponent)));
        this.subscription.addOne(component$, (res = {}) => {
            this.vcRef.clear();
            this.externalComponent = res.component;
            if (this.defaultComponentRef) {
                this.resetDefaultComponent();
            }
            if (res.component) {
                this.setProvidedData();
                const customInjector = Injector.create({
                    providers: [{ provide: 'REPLACEABLE_DATA', useValue: this.providedData }],
                    parent: this.injector,
                });
                this.vcRef.createComponent(this.cfRes.resolveComponentFactory(res.component), 0, customInjector);
            }
            else {
                this.vcRef.createEmbeddedView(this.templateRef, this.context);
            }
            this.initialized = true;
        });
    }
    ngOnChanges(changes) {
        if (snq(() => changes.data.currentValue.inputs) && this.defaultComponentRef) {
            this.setDefaultComponentInputs();
        }
    }
    setDefaultComponentInputs() {
        if (!this.defaultComponentRef || (!this.data.inputs && !this.data.outputs))
            return;
        if (this.data.inputs) {
            for (const key in this.data.inputs) {
                if (this.data.inputs.hasOwnProperty(key)) {
                    if (!compare(this.defaultComponentRef[key], this.data.inputs[key].value)) {
                        this.defaultComponentRef[key] = this.data.inputs[key].value;
                    }
                }
            }
        }
        if (this.data.outputs) {
            for (const key in this.data.outputs) {
                if (this.data.outputs.hasOwnProperty(key)) {
                    if (!this.defaultComponentSubscriptions[key]) {
                        this.defaultComponentSubscriptions[key] = this.defaultComponentRef[key].subscribe(value => {
                            this.data.outputs[key](value);
                        });
                    }
                }
            }
        }
    }
    setProvidedData() {
        this.providedData = Object.assign(Object.assign({}, this.data), { inputs: {} });
        if (!this.data.inputs)
            return;
        Object.defineProperties(this.providedData.inputs, Object.assign({}, Object.keys(this.data.inputs).reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: Object.assign({ enumerable: true, configurable: true, get: () => this.data.inputs[key].value }, (this.data.inputs[key].twoWay && {
                set: newValue => {
                    this.data.inputs[key].value = newValue;
                    this.data.outputs[`${key}Change`](newValue);
                },
            })) })), {})));
    }
    resetDefaultComponent() {
        Object.keys(this.defaultComponentSubscriptions).forEach(key => {
            this.defaultComponentSubscriptions[key].unsubscribe();
        });
        this.defaultComponentSubscriptions = {};
        this.defaultComponentRef = null;
    }
}
ReplaceableTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[abpReplaceableTemplate]', providers: [SubscriptionService] },] }
];
ReplaceableTemplateDirective.ctorParameters = () => [
    { type: Injector },
    { type: TemplateRef },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: ReplaceableComponentsService },
    { type: SubscriptionService }
];
ReplaceableTemplateDirective.propDecorators = {
    data: [{ type: Input, args: ['abpReplaceableTemplate',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZWFibGUtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvcmVwbGFjZWFibGUtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFFBQVEsRUFDUixLQUFLLEVBSUwsV0FBVyxFQUVYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFFbkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUd0QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMxRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUd2RSxNQUFNLE9BQU8sNEJBQTRCO0lBbUJ2QyxZQUNVLFFBQWtCLEVBQ2xCLFdBQTZCLEVBQzdCLEtBQStCLEVBQy9CLEtBQXVCLEVBQ3ZCLHFCQUFtRCxFQUNuRCxZQUFpQztRQUxqQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixVQUFLLEdBQUwsS0FBSyxDQUEwQjtRQUMvQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQThCO1FBQ25ELGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQXJCM0MsaUJBQVksR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFHdkMsQ0FBQztRQUVGLFlBQU8sR0FBRyxFQUFTLENBQUM7UUFNcEIsa0NBQTZCLEdBQUcsRUFBa0MsQ0FBQztRQUVuRSxnQkFBVyxHQUFHLEtBQUssQ0FB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cnlSZXNvbHZlcixcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGNvbXBhcmUgZnJvbSAnanVzdC1jb21wYXJlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVDb21wb25lbnRzIH0gZnJvbSAnLi4vbW9kZWxzL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N1YnNjcmlwdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thYnBSZXBsYWNlYWJsZVRlbXBsYXRlXScsIHByb3ZpZGVyczogW1N1YnNjcmlwdGlvblNlcnZpY2VdIH0pXHJcbmV4cG9ydCBjbGFzcyBSZXBsYWNlYWJsZVRlbXBsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgnYWJwUmVwbGFjZWFibGVUZW1wbGF0ZScpXHJcbiAgZGF0YTogUmVwbGFjZWFibGVDb21wb25lbnRzLlJlcGxhY2VhYmxlVGVtcGxhdGVEaXJlY3RpdmVJbnB1dDxhbnksIGFueT47XHJcblxyXG4gIHByb3ZpZGVkRGF0YSA9IHsgaW5wdXRzOiB7fSwgb3V0cHV0czoge30gfSBhcyBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUmVwbGFjZWFibGVUZW1wbGF0ZURhdGE8XHJcbiAgICBhbnksXHJcbiAgICBhbnlcclxuICA+O1xyXG5cclxuICBjb250ZXh0ID0ge30gYXMgYW55O1xyXG5cclxuICBleHRlcm5hbENvbXBvbmVudDogVHlwZTxhbnk+O1xyXG5cclxuICBkZWZhdWx0Q29tcG9uZW50UmVmOiBhbnk7XHJcblxyXG4gIGRlZmF1bHRDb21wb25lbnRTdWJzY3JpcHRpb25zID0ge30gYXMgQUJQLkRpY3Rpb25hcnk8U3Vic2NyaXB0aW9uPjtcclxuXHJcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICBwcml2YXRlIGNmUmVzOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSByZXBsYWNlYWJsZUNvbXBvbmVudHM6IFJlcGxhY2VhYmxlQ29tcG9uZW50c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uU2VydmljZSxcclxuICApIHtcclxuICAgIHRoaXMuY29udGV4dCA9IHtcclxuICAgICAgaW5pdFRlbXBsYXRlOiByZWYgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzZXREZWZhdWx0Q29tcG9uZW50KCk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Q29tcG9uZW50UmVmID0gcmVmO1xyXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdENvbXBvbmVudElucHV0cygpO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50JCA9IHRoaXMucmVwbGFjZWFibGVDb21wb25lbnRzXHJcbiAgICAgIC5nZXQkKHRoaXMuZGF0YS5jb21wb25lbnRLZXkpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcihcclxuICAgICAgICAgIChyZXMgPSB7fSBhcyBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUmVwbGFjZWFibGVDb21wb25lbnQpID0+XHJcbiAgICAgICAgICAgICF0aGlzLmluaXRpYWxpemVkIHx8ICFjb21wYXJlKHJlcy5jb21wb25lbnQsIHRoaXMuZXh0ZXJuYWxDb21wb25lbnQpLFxyXG4gICAgICAgICksXHJcbiAgICAgICk7XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkT25lKFxyXG4gICAgICBjb21wb25lbnQkLFxyXG4gICAgICAocmVzID0ge30gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlJlcGxhY2VhYmxlQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy52Y1JlZi5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZXh0ZXJuYWxDb21wb25lbnQgPSByZXMuY29tcG9uZW50O1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRDb21wb25lbnRSZWYpIHtcclxuICAgICAgICAgIHRoaXMucmVzZXREZWZhdWx0Q29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzLmNvbXBvbmVudCkge1xyXG4gICAgICAgICAgdGhpcy5zZXRQcm92aWRlZERhdGEoKTtcclxuICAgICAgICAgIGNvbnN0IGN1c3RvbUluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiAnUkVQTEFDRUFCTEVfREFUQScsIHVzZVZhbHVlOiB0aGlzLnByb3ZpZGVkRGF0YSB9XSxcclxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLnZjUmVmLmNyZWF0ZUNvbXBvbmVudChcclxuICAgICAgICAgICAgdGhpcy5jZlJlcy5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShyZXMuY29tcG9uZW50KSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgY3VzdG9tSW5qZWN0b3IsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmLCB0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHNucSgoKSA9PiBjaGFuZ2VzLmRhdGEuY3VycmVudFZhbHVlLmlucHV0cykgJiYgdGhpcy5kZWZhdWx0Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHRoaXMuc2V0RGVmYXVsdENvbXBvbmVudElucHV0cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGVmYXVsdENvbXBvbmVudElucHV0cygpIHtcclxuICAgIGlmICghdGhpcy5kZWZhdWx0Q29tcG9uZW50UmVmIHx8ICghdGhpcy5kYXRhLmlucHV0cyAmJiAhdGhpcy5kYXRhLm91dHB1dHMpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS5pbnB1dHMpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kYXRhLmlucHV0cykge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuaW5wdXRzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIGlmICghY29tcGFyZSh0aGlzLmRlZmF1bHRDb21wb25lbnRSZWZba2V5XSwgdGhpcy5kYXRhLmlucHV0c1trZXldLnZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDb21wb25lbnRSZWZba2V5XSA9IHRoaXMuZGF0YS5pbnB1dHNba2V5XS52YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLm91dHB1dHMpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kYXRhLm91dHB1dHMpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLm91dHB1dHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRDb21wb25lbnRTdWJzY3JpcHRpb25zW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q29tcG9uZW50U3Vic2NyaXB0aW9uc1trZXldID0gdGhpcy5kZWZhdWx0Q29tcG9uZW50UmVmW2tleV0uc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5vdXRwdXRzW2tleV0odmFsdWUpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRQcm92aWRlZERhdGEoKSB7XHJcbiAgICB0aGlzLnByb3ZpZGVkRGF0YSA9IHsgLi4udGhpcy5kYXRhLCBpbnB1dHM6IHt9IH07XHJcblxyXG4gICAgaWYgKCF0aGlzLmRhdGEuaW5wdXRzKSByZXR1cm47XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLnByb3ZpZGVkRGF0YS5pbnB1dHMsIHtcclxuICAgICAgLi4uT2JqZWN0LmtleXModGhpcy5kYXRhLmlucHV0cykucmVkdWNlKFxyXG4gICAgICAgIChhY2MsIGtleSkgPT4gKHtcclxuICAgICAgICAgIC4uLmFjYyxcclxuICAgICAgICAgIFtrZXldOiB7XHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLmRhdGEuaW5wdXRzW2tleV0udmFsdWUsXHJcbiAgICAgICAgICAgIC4uLih0aGlzLmRhdGEuaW5wdXRzW2tleV0udHdvV2F5ICYmIHtcclxuICAgICAgICAgICAgICBzZXQ6IG5ld1ZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5pbnB1dHNba2V5XS52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm91dHB1dHNbYCR7a2V5fUNoYW5nZWBdKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAge30sXHJcbiAgICAgICksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0RGVmYXVsdENvbXBvbmVudCgpIHtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdENvbXBvbmVudFN1YnNjcmlwdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgdGhpcy5kZWZhdWx0Q29tcG9uZW50U3Vic2NyaXB0aW9uc1trZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGVmYXVsdENvbXBvbmVudFN1YnNjcmlwdGlvbnMgPSB7fSBhcyBBQlAuRGljdGlvbmFyeTxTdWJzY3JpcHRpb24+O1xyXG4gICAgdGhpcy5kZWZhdWx0Q29tcG9uZW50UmVmID0gbnVsbDtcclxuICB9XHJcbn1cclxuIl19