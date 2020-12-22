import * as firebase from "firebase";

export const isServer = typeof window === "undefined";

interface IParams {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  searchParameters?:
    | string[][]
    | Record<string, string>
    | string
    | URLSearchParams;
  data?: any;
  type?: "file";
}

export class ApiService {
  private _apiBase?: string;
  private _auth?: firebase.auth.Auth;
  private fetch: typeof fetch;

  constructor() {
    this.fetch = isServer ? require("node-fetch") : window.fetch.bind(window);
  }

  init(apiBase: string, _auth: firebase.auth.Auth) {
    this._apiBase = apiBase;
    this._auth = _auth;
  }

  async makeApiRequest(path: string, params?: IParams): Promise<any> {
    const defaultParams = { method: "GET" };
    const { method, data, searchParameters, type } = {
      ...defaultParams,
      ...params,
    };
    if (!(this._apiBase && this._auth)) {
      throw new Error("Network Service not Initialized");
    }
    const token = await this._auth.currentUser?.getIdToken();
    if (searchParameters != null) {
      path += "?" + new URLSearchParams(searchParameters).toString();
    }
    const url = new URL(path, this._apiBase);
    return this.fetch(url.href, {
      method: method,
      headers: {
        ...(type === "file" ? {} : { "Content-type": "application/json" }),
        Authorization: `Bearer ${token}`,
      },
      body: type === "file" ? data : JSON.stringify(data),
    }).then(async (response) => {
      if (response.ok) {
        return response.json();
      } else {
        const err = await response.json();
        throw new Error(err?.message ?? "Unknown error");
      }
    });
  }
}

export default new ApiService();
