class Model {

  attributes = {};

  hidden = {};

  construct(attr) {
    $.extend(this.attributes, attr);
  }
  
  toJSON() {
    return JSON.parse(this);
  }
}
