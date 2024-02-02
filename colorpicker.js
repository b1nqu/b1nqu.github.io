const colorPicker = document.getElementById("colorPicker");
const rgbValue = document.getElementById("rgbValue");

colorPicker.addEventListener("input", () => {
    const color = colorPicker.value;
    rgbValue.value = color;
});

function copyRGB() {
    navigator.clipboard.writeText(rgbValue.value);
}