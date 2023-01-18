function editElement(element, match, replacer) {
    let pattern = new RegExp(match, 'g');
    element.textContent = element.textContent.replace(pattern, replacer);
}