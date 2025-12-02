export class StorageService {
  static save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
  }

  static get(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error("Error reading from localStorage", e);
      return null;
    }
  }
}
