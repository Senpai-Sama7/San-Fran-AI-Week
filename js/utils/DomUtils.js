/**
 * DOM Utility for efficient and safe element creation.
 * Replaces innerHTML usage to prevent XSS and improve performance.
 */
export class DomUtils {
  /**
   * Creates a DOM element with attributes and children.
   * @param {string} tag - The HTML tag name.
   * @param {Object} [attributes={}] - Key-value pairs for attributes. Use 'className' for class.
   * @param {Array<string|HTMLElement>} [children=[]] - Array of children (strings or elements).
   * @returns {HTMLElement} The created element.
   */
  static create(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);

    // Apply attributes
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === "className") {
        element.className = value;
      } else if (key === "dataset") {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue;
        });
      } else if (key === "style" && typeof value === "object") {
        Object.assign(element.style, value);
      } else if (key.startsWith("on") && typeof value === "function") {
        const eventName = key.substring(2).toLowerCase();
        element.addEventListener(eventName, value);
      } else {
        if (value !== false && value !== null && value !== undefined) {
          element.setAttribute(key, value);
        }
      }
    });

    // Append children
    children.forEach((child) => {
      if (child instanceof HTMLElement || child instanceof SVGElement) {
        element.appendChild(child);
      } else if (child !== null && child !== undefined) {
        element.appendChild(document.createTextNode(String(child)));
      }
    });

    return element;
  }

  /**
   * Clears all children from an element.
   * @param {HTMLElement} element
   */
  /**
   * Clears all children from an element.
   * @param {HTMLElement} element
   */
  static clear(element) {
    while (element.firstChild) {
      element.firstChild.remove();
    }
  }

  /**
   * Creates an SVG element with attributes and children.
   * @param {string} tag - The SVG tag name.
   * @param {Object} [attributes={}] - Key-value pairs for attributes.
   * @param {Array<string|Element>} [children=[]] - Array of children.
   * @returns {SVGElement} The created SVG element.
   */
  static createSVG(tag, attributes = {}, children = []) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);

    // Apply attributes
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === "className") {
        element.setAttribute("class", value);
      } else {
        element.setAttribute(key, value);
      }
    });

    // Append children
    children.forEach((child) => {
      if (child instanceof Element) {
        element.appendChild(child);
      } else if (child !== null && child !== undefined) {
        element.textContent = String(child);
      }
    });

    return element;
  }
}
