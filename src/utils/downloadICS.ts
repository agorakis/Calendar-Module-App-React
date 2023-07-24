// This function triggers the download of the .ICS file..

const downloadICS = (icsContent: string, filename: string) => {
  const blob = new Blob([icsContent], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

export default downloadICS;
