function f1() {
  //function to make the text bold using DOM method
  document.getElementById("textarea1").style.fontWeight = "bold";
}

function f2() {
  //function to make the text italic using DOM method
  document.getElementById("textarea1").style.fontStyle = "italic";
}

function f3() {
  //function to make the text alignment left using DOM method
  document.getElementById("textarea1").style.textAlign = "left";
}

function f4() {
  //function to make the text alignment center using DOM method
  document.getElementById("textarea1").style.textAlign = "center";
}

function f5() {
  //function to make the text alignment right using DOM method
  document.getElementById("textarea1").style.textAlign = "right";
}

function f6() {
  //function to make the text in Uppercase using DOM method
  document.getElementById("textarea1").style.textTransform = "uppercase";
}

function f7() {
  //function to make the text in Lowercase using DOM method
  document.getElementById("textarea1").style.textTransform = "lowercase";
}

function f8() {
  //function to make the text capitalize using DOM
  document.getElementById("textarea1").style.textTransform = "capitalize";
}

function f9() {
  //function to make the text back to normal by removing all the methods applied
  //using DOM method
  document.getElementById("textarea1").style.fontWeight = "normal";
  document.getElementById("textarea1").style.textAlign = "left";
  document.getElementById("textarea1").style.fontStyle = "normal";
  document.getElementById("textarea1").style.textTransform = "capitalize";
  document.getElementById("textarea1").value = " ";
}

function f10() {
  document.getElementById("textareal").style.color = "#000"
}

// Function to select and change text color
    function changeColor() {
      var selectedColor = document.getElementById("colorPicker").value;
    
      var textArea = document.getElementById("textarea1");
      textArea.style.color = selectedColor;
    }



// Function to save the text content to a file
function saveTextAsFile() {
    const textContent = document.getElementById("textarea1").value;
    const userFilename = document.getElementById("filename").value || "downloaded";

    const blob = new Blob([textContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    // Update the download link
    const downloadLink = document.getElementById("download-link");
    downloadLink.href = url;
    downloadLink.download = userFilename;
    downloadLink.style.display = "block";
}

// Function to clear formatting and text
 function clearFormatting() {
     document.getElementById("textarea1").style.fontWeight = "normal";
     document.getElementById("textarea1").style.textAlign = "left";
     document.getElementById("textarea1").style.fontStyle = "normal";
     document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";
 }

// Call the saveTextAsFile function when the "Save" button is clicked
document.getElementById("save-button").addEventListener("click", saveTextAsFile);


// To upload and edit text file from divice
let selectedFile;

        document.getElementById('fileInput').addEventListener('change', handleFileSelect);

        function handleFileSelect(event) {
            const fileInput = event.target;
            selectedFile = fileInput.files[0];

            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById('textarea1').value = e.target.result;
                };
                reader.readAsText(selectedFile);
            }
        }

        function enableEditing() {
            document.getElementById('textarea1').readOnly = false;
        }




