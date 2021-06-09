class Model {

  attributes = {};

  hidden = {};

  construct(attr) {
    $.extend(this.attributes, attr);
  }

  toJson() {
    return JSON.parse(this);
  }
}
