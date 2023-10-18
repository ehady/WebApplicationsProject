document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('launch-btn').addEventListener('click', calculate);
    document.getElementById('randomize-btn').addEventListener('click', fillWithRandomIntegers);
    document.getElementById('foreground-color').addEventListener('change', changeForeground);
    document.getElementById('background-color').addEventListener('change', changeBackground);
  });
  
  function calculate() {
    var args = document.getElementById('arguments').value;
    var operation = document.getElementById('operation').value;
    var result = document.getElementById('result');
    
    args = args.trim().split(/\s+/);
    args = args.map(function(arg) {
      return parseInt(arg);
    });
    
    if (operation === '∑') {
      result.value = args.reduce(function(a, b) {
        return a + b;
      }, 0);
    } else if (operation === '∏') {
      result.value = args.reduce(function(a, b) {
        return a * b;
      }, 1);
    } else if (operation === '>') {
      result.value = Math.max.apply(null, args);
    } else if (operation === '<') {
      result.value = Math.min.apply(null, args);
    }
  }
  
  function fillWithRandomIntegers() {
    var args = [];
    
    for (var i = 0; i < 10; i++) {
      args.push(Math.floor(Math.random() * 10));
    }
    
    document.getElementById('arguments').value = args.join(' ');
  }
  
  function changeForeground() {
    var color = document.getElementById('foreground-color').value;
    document.getElementById('arguments').style.color = color;
    document.getElementById('result').style.color = color;
  }
  
  function changeBackground() {
    var color = document.getElementById('background-color').value;
    document.getElementById('arguments').style.backgroundColor = color;
    document.getElementById('result').style.backgroundColor = color;
  }
  function saveData() {
    var args = document.getElementById('arguments').value;
    var operation = document.getElementById('operation').value;
    var result = document.getElementById('result').value;
  
    var filename = prompt("Enter a filename to save the data", "data.txt");
    if (filename) {
      var data = "Arguments: " + args + "\n" +
                 "Operation: " + operation + "\n" +
                 "Result: " + result;
  
      var blob = new Blob([data], { type: 'text/plain' });
  
      // Create a temporary anchor element to trigger the file download
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = filename;
  
      // Append the anchor to the document and trigger the click event
      document.body.appendChild(a);
      a.click();
  
      // Clean up
      document.body.removeChild(a);
      window.URL.revokeObjectURL(a.href);
    }
  }
  