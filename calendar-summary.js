import { BaseElement } from './core/base-element.js';
import { DateFormatter } from './date-formatter.js';

class XCalendarSummary extends BaseElement {
    get summary() {
        // var date = new Date(this.getAttribute('data-date'));
        const date = new Date(this.dataset.date);
        return DateFormatter.monthString(date);
    }
    update(date){
        this.setAttribute('data-date', date);
        this.$.text.textContent = this.summary;
    }
    render() {
        return `
            <span id="text">${this.summary}</span>
        `;
    }
}
customElements.define('x-calendar-summary', XCalendarSummary);