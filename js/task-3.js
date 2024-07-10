function getElementWidth (content, padding, border) {

    const floatContent = Number.parseFloat(content);
    const floatPadding = Number.parseFloat(padding);
    const floatBorder = Number.parseFloat(border);

    return floatContent + floatPadding * 2 + floatBorder * 2;
  }


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200