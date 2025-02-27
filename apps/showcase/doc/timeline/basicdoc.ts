import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'basic-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>
                Timeline receives the events with the <i>value</i> property as a collection of arbitrary objects. In addition, <i>content</i> template is required to display the representation of an event. Example below is a sample events array that
                is used throughout the documentation.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-timeline [value]="events">
                <ng-template #content let-event>
                    {{ event.status }}
                </ng-template>
            </p-timeline>
        </div>
        <app-code [code]="code" selector="timeline-basic-demo"></app-code>
    `
})
export class BasicDoc {
    events: any[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }

    code: Code = {
        basic: `<p-timeline [value]="events">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>`,

        html: `<div class="card">
    <p-timeline [value]="events">
        <ng-template #content let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
</div>`,

        typescript: `import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';

@Component({
    selector: 'timeline-basic-demo',
    templateUrl: './timeline-basic-demo.html',
    standalone: true,
    imports: [Timeline]
})
export class TimelineBasicDemo {
    events: any[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`
    };
}
