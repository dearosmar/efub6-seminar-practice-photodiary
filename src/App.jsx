import { useState } from "react";
import UploadForm from "./components/UploadForm";
import PostList from "./components/PostList";

function App() {
  // TODO 1️⃣: 일기 목록을 저장할 state를 만드세요
  // 힌트: useState로 빈 배열을 초기값으로

  const handleAddPost = (newPost) => {
    // TODO 2️⃣: posts 배열에 newPost를 추가하세요
    // 힌트: 기존 배열을 펼치고 새 항목을 뒤에 붙이기
  };

  return (
    <div className="app">
      <h1>📔 나의 사진 일기장</h1>
      {/* TODO 3️⃣: UploadForm 컴포넌트에 onAddPost prop으로 함수 전달 */}
      {/* TODO 4️⃣: PostList 컴포넌트에 posts prop으로 배열 전달 */}
    </div>
  );
}

export default App;