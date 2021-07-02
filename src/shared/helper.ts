export class Helper{
    static customFileName(req, file, cb){
        let customeFile  = file.originalname.split(".")[0];
        customeFile = customeFile+ Date.now() + '-' + Math.round(Math.random() * 1e9);
        let fileExtention = ""
        if(file.mimetype.indexOf("jpeg") > -1){
            fileExtention = ".jpeg";
        }else if(file.mimetype.indexOf(".png") > -1) {
            fileExtention = ".png";
        }

        customeFile = customeFile+ fileExtention;
        cb(null, customeFile);
    }
    static filePath(req, file, cb){
        cb(null, './panimages');
    }
}