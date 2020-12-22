import { Request, Response } from "express";
import firebaseService from "./firebaseService";
import { UploadedFile } from "express-fileupload";

class UploadService {
  async upload(req: Request, res: Response) {
    if (req.files && "file" in req.files && req.files.file) {
      try {
        const result = await firebaseService.uploadFile(req.files.file as UploadedFile);
        res.json(result);
      } catch (e) {
        res.status(500).send(e);
      }
    } else {
      res.status(520).send("has no file");
    }
  }
}

export default new UploadService();
