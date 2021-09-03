import { observe } from "./Observer.js";

export default class Components {
  props;
  $element;

  constructor($element, props) {
    this.$element = $element;
    this.props = props;
    this.setup();
    this.setEvent();
  }

  setup() {
    observe(() => {
      this.render();
      this.mounted();
    });
  }

  template() {
    return "";
  }

  render() {
    this.$element.innerHTML = this.template();
  }

  setEvent() {}

  addEvent(eventType, selector, callback) {
    const children = [...this.$element.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);
    this.$element.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }

  mounted() {}
}
