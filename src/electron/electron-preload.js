// Allow usage of require in React components
window.require = require;

// Allow two-way communication between Electron and React
const { ipcRenderer, contextBridge } = require("electron");
// Expose backend functionality to React components
contextBridge.exposeInMainWorld("backend", {
  exampleFunction: (name) => ipcRenderer.invoke("exampleFunction", name),
});
