import { NextFunction, Request, Response } from "express";
import firebaseService from "./firebaseService";

class AuthService {
  public createAdmin = async (email: string) => {
    const user = await firebaseService.auth.createUser({ email });

    await firebaseService.auth.setCustomUserClaims(user.uid, {
      is_admin: true,
      email,
    });
    console.log(await firebaseService.auth.generatePasswordResetLink(email));
  };

  public getUser = async (req: Request, res: Response) => {
    const authToken = this.getAuthToken(req);
    try {
      const {
        is_admin,
        uid: firebase_uid,
        phone_number,
        email,
      } = await firebaseService.auth.verifyIdToken(authToken);
      return { is_admin, firebase_uid, phone_number, email };
    } catch (e) {
      res.status(401).send({ error: "You are not authorized to make this request" });
      return null;
    }
  };

  public isAdmin = async (req: Request) => {
    const authToken = this.getAuthToken(req);
    try {
      const { is_admin } = await firebaseService.auth.verifyIdToken(authToken);
      return is_admin;
    } catch (e) {
      return false;
    }
  };

  public authorizeAdmin = async (req: Request, res: Response) => {
    const user = await this.getUser(req, res);
    user && res.json(user);
  };

  public withAuthMW = (req: Request, res: Response, next: NextFunction) =>
    this.getUser(req, res).then((user) => {
      if (user) {
        next();
      } else {
        res.status(401).send("Unauthorized");
      }
    });

  public withAdminAuthMW = (req: Request, res: Response, next: NextFunction) =>
    this.getUser(req, res).then((user) => {
      if (user?.is_admin) {
        next();
      } else {
        res.status(401).send("Unauthorized");
      }
    });

  private getAuthToken = (req: Request) => {
    let authToken = "";
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
      authToken = req.headers.authorization.split(" ")[1];
    }
    return authToken;
  };
}

export default new AuthService();
