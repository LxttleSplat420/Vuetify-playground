import { ref } from 'vue';

export function useExportImport(store) {
  const fileInput = ref(null); // Reference for file input

  // Function to export store state
  const exportStore = async () => {
    const dataStr = JSON.stringify(store.$state, null, 2);

    if (window.showSaveFilePicker) {
      try {
        const fileHandle = await window.showSaveFilePicker({
          suggestedName: `${store.$id}_backup.json`,
          types: [{ description: "JSON Files", accept: { "application/json": [".json"] } }],
        });

        const writable = await fileHandle.createWritable();
        await writable.write(dataStr);
        await writable.close();
        console.log("File saved successfully.");
      } catch (error) {
        console.error("File save canceled or failed:", error);
      }
    } else {
      // Fallback for older browsers
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${store.$id}_backup.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      console.log("File downloaded (fallback).");
    }
  };

  // Function to import state from JSON file
  const importStore = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.warn("No file selected.");
      return;
    }

    console.log("Selected file:", file);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        console.log("Imported JSON Data:", importedData);

        if (typeof importedData === "object" && importedData !== null) {
          store.$patch(importedData);
          console.log("Store updated:", store.$state);
        } else {
          console.error("Invalid JSON structure.");
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };

    reader.onerror = () => console.error("Error reading file.");
    reader.readAsText(file);

    // Reset input to allow selecting the same file again
    event.target.value = "";
  };

  // Open file selector
  const openFileSelector = (event) => {
    event.stopPropagation(); // Prevent multiple event triggers
    if (fileInput.value) {
      fileInput.value.click();
    }
  };

  return {
    fileInput,
    exportStore,
    importStore,
    openFileSelector,
  };
}
