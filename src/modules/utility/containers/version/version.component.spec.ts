import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UtilityService } from '@modules/utility/services';
import { UtilityServiceStub } from '@testing/stubs/utility';

import { VersionComponent } from './version.component';

@Component({
    template: `
        <sb-version [someInput]="someInput" (someFunction)="someFunction($event)"></sb-version>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('VersionComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: VersionComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let utilityService: UtilityService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, VersionComponent],
            imports: [NoopAnimationsModule],
            providers: [{ provide: UtilityService, useValue: new UtilityServiceStub() }],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponentDE = fixture.debugElement;
        hostComponentNE = hostComponentDE.nativeElement;

        componentDE = hostComponentDE.children[0];
        component = componentDE.componentInstance;
        componentNE = componentDE.nativeElement;

        utilityService = TestBed.inject(UtilityService);

        fixture.detectChanges();
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sb-version')).toEqual(jasmine.anything());
    });
});
