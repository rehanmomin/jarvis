var excelModule = require('exceljs');
const xlsx = require('xlsx');
var workbook = new excelModule.Workbook();
const downloadsFolder = require('downloads-folder');

class Excel{
    getRowsFunc = function(filepath){
           return workbook.xlsx.readFile(filepath).then(function(){
                var worksheet = workbook.getWorksheet(1);
                return worksheet.actualRowCount;
        })

    }

    async writeData(filepath, values, prof_name){
        workbook.xlsx.readFile(filepath)
        .catch(function(error){
            console.log(error)
        })
        .then(function(){
            var worksheet = workbook.getWorksheet(1);
                var row = worksheet.getRow(worksheet.actualRowCount+1);
                var j=values.length;
                for(var i=1;  i<=j; i++){
                    row.getCell(i).value = values[i-1];
                }
                row.commit();
                workbook.xlsx.writeFile(downloadsFolder()+'/' +prof_name+'.xlsx'); 
        })

    }

    //use xlsx module rather than exceljs module : New method 
     
    async writeDataBulkEmployeeNew(filepath, data){
        console.log('File path to read:'+filepath)
        var workbook=xlsx.readFile(filepath)
        var worksheet=workbook.Sheets['Sheet1'];
        xlsx.utils.sheet_add_aoa(worksheet,data,{origin:"B4"}); //this line is working perfectly
        var newWB= xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(newWB,worksheet,"Sheet1")
        /* generate an XLS file */            
        xlsx.writeFile(newWB, downloadsFolder()+'/' +'destination-bulk-import.xls')    
       
    }
    async writeDataBulkInactivate(empID,filepath, product){
        console.log('File path to read:'+filepath)
        var workbook=xlsx.readFile(filepath)
        var worksheet=workbook.Sheets['Sheet1'];
        xlsx.utils.sheet_add_aoa(worksheet,empID,{origin:"A4"}); //this line is working perfectly
        var newWB= xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(newWB,worksheet,"Sheet1")
        /* generate an XLS file */            
        xlsx.writeFile(newWB, downloadsFolder()+'/' +'/destination-bulk-import-inactive'+product+'.xls')

    }

    async writeDataBulkEmployee(filepath, values){
        var regex = RegExp('(0)([0-9]|1[012])\\/(0)([0-9]|[12][0-9]|[3][01])\\/(19|20)\\d\\d')
        workbook.xlsx.readFile(filepath)
        .catch(function(error){
            console.log(error)
        })
        .then(function(){
            var worksheet = workbook.getWorksheet(1);
            worksheet.getCell(i).type
                var row = worksheet.getRow(worksheet.actualRowCount+1);
                var j=values.length;
                for(var i=1;  i<=j; i++){
                    if(regex.test(values[i-1])){
                        row.getCell(i).type = excelModule.ValueType.Date;
                        row.getCell(i).value = values[i-1];
                    }
                    else{
                        row.getCell(i).value = values[i-1];
                    }
                }
                row.commit();
                workbook.xlsx.writeFile(downloadsFolder() + '/destination.xlsx'); 
        })

    }

}

export default new Excel();
