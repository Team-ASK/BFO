import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PhotoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    // 로컬 스토리지에서 이미지 URL을 불러와서 상태로 설정
    const storedImageUrl = localStorage.getItem('imageUrl');
    if (storedImageUrl) {
      setPreviewUrl(storedImageUrl);
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // 파일을 미리 보기 위해 FileReader를 사용
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    try {
      // FormData를 사용하여 선택한 파일을 서버로 업로드
      const formData = new FormData();
      formData.append('file', selectedFile);

      
      // 서버로 업로드하는 API 호출
      const response = await axios.post("/image/profile", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'accessToken': `${localStorage.getItem("accessToken")}`
        }
      })
      console.log(response)
      // const imageUrl = response.data.imageUrl;
      // response.data가 formdata {}로 빈 값이 출력 
      // setPreviewUrl(imageUrl);
      console.log("나는 너의~~~~~~~~~~~~~~~~~~" + formData.get('accessToken'));

      alert('사진 업로드가 완료되었습니다.');
    } catch (error) {
      alert('사진 업로드에 실패했습니다.');
      console.error(error);
    }
  };

  return (
    <div>
      {/* 이미지 미리 보기 */}
      {previewUrl && <img src={previewUrl} alt="Preview" width="200" height="200" />}
      
      {/* 파일 선택 버튼 */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {/* 업로드 버튼 */}
      <button onClick={handleSubmit}>업로드</button>
    </div>
  );
}

export default PhotoUpload;