  function  loader_1(content) {
    this.cacheable && this.cacheable();
    this.value = content;
    return "module.exports = " + JSON.stringify(content);
  }

  function  loader_to_html(content) {
    this.cacheable && this.cacheable();
    this.value = content;
    return  `
    <div>
    <code>
      ${content}
    </code>
    </div>
    `
  }





  const loader=  loader_to_html
  module.exports =loader