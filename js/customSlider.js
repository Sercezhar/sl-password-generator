class Slider {
  constructor(lengthElement, valueElement, options) {
    this.lengthElement = lengthElement;
    this.valueElement = valueElement;
    this.options = options;

    this.lengthElement.addEventListener("input", this.updateSlider.bind(this));
  }

  init() {
    this.lengthElement.setAttribute("min", options.min);
    this.lengthElement.setAttribute("max", options.max);
    this.lengthElement.value = options.curr;

    this.updateSlider();
  }

  generateBackground(lengthElement) {
    if (this.lengthElement.value === this.options.min) {
      return;
    }

    let percentage =
      ((this.lengthElement.value - this.options.min) /
        (this.options.max - this.options.min)) *
      100;

    const background =
      "background: linear-gradient(to right, #d8fc00 " +
      percentage +
      "%, #fff " +
      percentage +
      "%)";

    return background;
  }

  updateSlider(newValue) {
    this.valueElement.innerHTML = this.lengthElement.value;
    this.lengthElement.style = this.generateBackground(
      this.lengthElement.value
    );
  }
}

let lengthElement = document.querySelector('.length [type="range"]');
let valueElement = document.querySelector(".length .length__value");

let options = {
  min: 6,
  max: 42,
  curr: 14,
};

if (lengthElement) {
  let slider = new Slider(lengthElement, valueElement, options);

  slider.init();
}
