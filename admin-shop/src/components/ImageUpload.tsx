import styled from "@emotion/styled";
import React, { useState } from "react";
import uploadService from "shop-common/services/uploadService";
import { notification, Space, Image } from "antd";
import Loading from "@components/Loading";

interface IProps {
  values?: string[];
  onChange: (image: string[]) => void;
}

const Root = styled.div<{ image?: string }>`
  display: flex;
  cursor: pointer !important;
  flex-direction: column;
  width: 200px;
  min-height: 64px;

  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }

  .btn {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    border: 1px dashed #d9d9d9;
    ${({ image }) => (image ? "color: transparent" : "")};
    background: ${({ image }) =>
      image ? `url("${image}") center no-repeat` : "#fafafa"};
    background-size: contain;
  }

  .upload-btn-wrapper input[type="file"] {
    cursor: pointer;
    font-size: 0px;
    width: 200px;
    height: 64px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
`;

const ImageUpload: React.FC<IProps> = ({ onChange, values }) => {
  const [loading, setLoading] = useState(false);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    setLoading(true);
    try {
      const img = await uploadService.uploadFile(e.target.files[0]);
      onChange([...(values ?? []), img]);
      notification.success({ message: "File was uploaded" });
      setLoading(false);
    } catch (e) {
      notification.error({ message: "something wrong" });
      setLoading(false);
    }
  };
  return (
    <Root>
      <div className="upload-btn-wrapper">
        <div className="btn">{loading ? <Loading /> : "+ Upload a file"}</div>
        <input
          disabled={loading}
          type="file"
          name="file"
          onChange={handleChange}
        />
        <input
          disabled={loading}
          type="file"
          name="file"
          onChange={handleChange}
        />
      </div>
    </Root>
  );
};
export default ImageUpload;
