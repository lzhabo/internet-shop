// import { notification, Upload } from "antd";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import React, { useState } from "react";
// import { UploadChangeParam } from "antd/lib/upload/interface";
// import styled from "@emotion/styled";
// import uploadService, { IImage } from "@services/uploadService";
//
// const Root = styled.div`
//   & .avatar-uploader > .ant-upload {
//     width: 200px;
//     height: 200px;
//   }
// `;
//
// interface IProps {
//   value?: IImage;
//   onChange: (image: IImage) => void;
// }
//
// const ProductCardAvatarUpload: React.FunctionComponent<IProps> = ({
//   value,
//   onChange,
// }) => {
//   const [loading, setLoading] = useState(false);
//   const [imageUrl, setImageUrl] = useState(value?.image_preview_url);
//
//   const uploadButton = (
//     <div>
//       {loading ? <LoadingOutlined /> : <PlusOutlined />}
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </div>
//   );
//
//   const handleChange = async (info: UploadChangeParam) => {
//     if (info.file.originFileObj == null) return;
//     try {
//       setLoading(true);
//       const img = await uploadService.uploadFile(info.file.originFileObj);
//       setImageUrl(img.image_preview_url);
//       onChange(img);
//       notification.success({ message: "something wrong" });
//       setLoading(false);
//     } catch (e) {
//       notification.error({ message: "something wrong" });
//       setLoading(false);
//     }
//   };
//   return (
//     <Root>
//       <Upload
//         className="avatar-uploader"
//         listType="picture-card"
//         style={{ width: 200, height: 200 }}
//         showUploadList={false}
//         name="file"
//         beforeUpload={() => false}
//         onChange={handleChange}
//       >
//         {imageUrl ? (
//           <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
//         ) : (
//           uploadButton
//         )}
//       </Upload>
//     </Root>
//   );
// };
//
// export default ProductCardAvatarUpload;

import styled from "@emotion/styled";
import React, { useState } from "react";
import uploadService, { IImage } from "@services/uploadService";
import { notification } from "antd";
import Loading from "@components/Loading";

interface IProps {
  value?: IImage;
  onChange: (image: IImage) => void;
}

const Root = styled.div<{ image?: string }>`
  display: flex;
  cursor: pointer !important;
  flex-direction: column;
  width: 200px;
  min-height: 200px;

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
    height: 200px;
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
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
`;

const ProductCardAvatarUpload: React.FC<IProps> = ({ onChange, value }) => {
  const [loading, setLoading] = useState(false);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    setLoading(true);
    try {
      const img = await uploadService.uploadFile(e.target.files[0]);
      onChange(img);
      notification.success({ message: "File was uploaded" });
      setLoading(false);
    } catch (e) {
      notification.error({ message: "something wrong" });
      setLoading(false);
    }
  };
  return (
    <Root image={!loading ? value?.image_preview_url : undefined}>
      <div className="upload-btn-wrapper">
        <div className="btn">{loading ? <Loading /> : "+ Upload a file"}</div>
        <input type="file" name="file" onChange={handleChange} />
      </div>
      {/*<input type="file" onChange={handleChange} className="file-input" />*/}
      {/*{value && (*/}
      {/*  <img*/}
      {/*    src={value.image_preview_url}*/}
      {/*    alt="avatar"*/}
      {/*    style={{ height: "200px" }}*/}
      {/*  />*/}
      {/*)}*/}
    </Root>
  );
};
export default ProductCardAvatarUpload;
