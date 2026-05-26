import { useState } from "react";

function UploadForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    // TODO 1️⃣: URL.createObjectURL()로 미리보기 URL 생성 후 state에 저장
  };

  const handleSubmit = () => {
    if (!title || !file) {
      alert("제목과 이미지를 모두 입력해주세요");
      return;
    }

    // TODO 2️⃣: FormData 객체 생성 후 title, image를 append
    // const formData = ...

    // TODO 3️⃣: 콘솔에 FormData 내용 출력해 보기 (formData.entries() 활용)

    // TODO 4️⃣: 부모에게 새 일기 데이터 전달
    // onAddPost({ id: Date.now(), title: ..., imageUrl: ... });

    // 입력 초기화
    setTitle("");
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className="upload-form">
      {/* TODO 5️⃣: title input과 onChange 핸들러 작성 */}

      <input
        type="file"
        id="imgUpload"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <label htmlFor="imgUpload" className="file-btn">
        📷 이미지 선택
      </label>

      {/* TODO 6️⃣: previewUrl이 있을 때만 <img>로 미리보기 표시 */}

      <button onClick={handleSubmit}>일기 작성</button>
    </div>
  );
}

export default UploadForm;