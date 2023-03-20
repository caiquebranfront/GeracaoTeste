function upload() {
    var files = document.getElementById("fileUpload").files;
    if (files.length == 0) {
      alert("Please choose any file...");
      return;
    }
    var filename = files[0].name;
    var extension = filename
      .substring(filename.lastIndexOf("."))
      .toUpperCase();
    if (extension == ".CSV") {

      csvFileToJSON(files[0]);
    } else {
      alert("Please select a valid csv file.");
    }
  }

  function csvFileToJSON(file) {
    try {
      var reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = function (e) {
        var jsonData = [];
        var headers = [];
        var rows = e.target.result.split("\r\n");
        for (var i = 0; i < rows.length; i++) {
          var cells = rows[i].split(";");
          var rowData = {};
          for (var j = 0; j < cells.length; j++) {
            if (i == 0 ) {
              var filterCity = cells.filter(cidade => cidade == "Cidade")
              headers.push(filterCity)

            } else {
              var key = headers[j];
              if (key) {
                rowData[key] = cells[j].trim();
              }
            }
          }
          if (i != 0) {
            jsonData.push(rowData);
          }
        }

        document.getElementById("displayFormat").value =
          JSON.stringify(jsonData, null, 4);
      };
    } catch (e) {
      console.error(e);
    }
  }