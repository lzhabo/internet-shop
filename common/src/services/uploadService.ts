import apiService from "./apiService";

export default {
  uploadFile(file: Blob | File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);
    return apiService.makeApiRequest("api/v1/upload", {
      method: "POST",
      data: formData,
      type: "file",
    });
  },
};
