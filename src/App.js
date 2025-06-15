import React, { useState, useRef, useEffect } from 'react'; // Import useState, useRef, useEffect
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components

// 💖💖💖 CÁC DÒNG IMPORT COMPONENT ĐÃ ĐƯỢC SỬA ĐƯỜNG DẪN CHÍNH XÁC RỒI ĐÂY! 💖💖💖
import Header from './components/Header';
import HeroSection from './components/HeroSection'; // Đã sửa đường dẫn chính xác!
import CharacterCard from './components/CharacterCard';
import GadgetAnimation from './components/GadgetAnimation';
import Footer from './components/Footer';
import CharacterDetail from './components/CharacterDetail';

import charactersData from './data/characters';
import './styles/App.css';
import './styles/fonts.css';

// 🎶🎶🎶 CÁC DÒNG IMPORT FILE NHẠC (Đường dẫn này vẫn đúng nha!) 🎶🎶🎶
import paradise from './assets/audio/Paradise.mp3';
import giacMoThanTien from './assets/audio/GiacMoThanTien.mp3';
import cuVuiThoi from './assets/audio/CuVuiThoi.mp3';
import noiTaThuocVe from './assets/audio/NoiTaThuocVe.mp3';
import sketch from './assets/audio/Sketch.mp3';

// Styled components cho Home Page sections
const AppContainer = styled.div`
  font-family: 'Comic Sans MS', cursive; /* Set font chung cho toàn app */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  overflow-x: hidden; /* Đảm bảo không có scrollbar ngang */
  position: relative; /* Để đặt nút điều khiển nhạc */
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  color: #34495e;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Comic Sans MS', cursive;
`;

const CharactersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  justify-items: center;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const MusicControl = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 123, 255, 0.8); /* Màu xanh Doraemon */
  color: white;
  padding: 10px 15px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 100, 200, 0.9);
  }

  button {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0 5px;
  }
  span {
    white-space: nowrap;
  }
`;

// Component cho trang chủ (Home Page)
function HomePage() {
  return (
    <> {/* Fragment để bao bọc nhiều element mà không tạo thêm div */}
      <HeroSection />

      <SectionTitle id="characters">Gặp gỡ những người bạn của Doraemon! 🤗</SectionTitle>
      <CharactersGrid>
        {charactersData.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </CharactersGrid>

      <GadgetAnimation />
    </>
  );
}

function App() {
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongName, setCurrentSongName] = useState('');

  // Danh sách các bài hát
  const playlist = [
    { name: 'Paradise', src: paradise },
    { name: 'Giấc Mơ Thần Tiên', src: giacMoThanTien },
    { name: 'Cứ Vui Thôi', src: cuVuiThoi },
    { name: 'Nơi Ta Thuộc Về', src: noiTaThuocVe },
    { name: 'Sketch', src: sketch },
  ];

  // Hàm để phát nhạc
  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setCurrentSongName(playlist[currentSongIndex].name);
      }).catch(error => {
        console.error("Lỗi khi cố gắng phát nhạc:", error);
        // Đây là lỗi trình duyệt chặn autoplay, thông báo cho người dùng click để phát
        alert("Trình duyệt chặn tự động phát nhạc! Vui lòng nhấn nút Play để nghe nhạc nhé! 🎶");
        setIsPlaying(false);
      });
    }
  };

  // Hàm để tạm dừng nhạc
  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Hàm chuyển bài khi bài hát kết thúc
  const handleSongEnd = () => {
    const nextSongIndex = (currentSongIndex + 1) % playlist.length;
    setCurrentSongIndex(nextSongIndex);
  };

  // Effect để cập nhật source nhạc và tự động phát bài tiếp theo
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = playlist[currentSongIndex].src;
      setCurrentSongName(playlist[currentSongIndex].name);
      if (isPlaying) {
        playMusic(); // Tự động phát bài mới nếu đang ở trạng thái phát
      }
    }
  }, [currentSongIndex, isPlaying]); // Thêm isPlaying vào dependency array để đảm bảo playMusic được gọi đúng lúc

  // Effect để bắt đầu phát nhạc khi component mount (thử autoplay, nhưng sẽ bị chặn)
  useEffect(() => {
    // Không gọi playMusic() trực tiếp ở đây nữa để tránh lỗi autoplay bị chặn ngay từ đầu.
    // Thay vào đó, người dùng sẽ click vào nút Play.
    setCurrentSongName(playlist[currentSongIndex].name); // Set tên bài hát ban đầu
  }, []); // Chỉ chạy một lần khi component được render

  return (
    <Router> {/* Bọc toàn bộ ứng dụng trong Router */}
      <AppContainer>
        <Header /> {/* Header hiển thị trên tất cả các trang */}
        <Routes> {/* Định nghĩa các tuyến đường */}
          <Route path="/" element={<HomePage />} /> {/* Trang chủ */}
          <Route path="/character/:id" element={<CharacterDetail />} /> {/* Trang chi tiết nhân vật, :id là tham số động */}
          {/* Nếu muốn thêm trang "Về chúng tôi" hoặc "Bảo bối", bạn có thể thêm Route ở đây */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/gadgets-list" element={<GadgetListPage />} /> */}
        </Routes>
        <Footer /> {/* Footer hiển thị trên tất cả các trang */}

        {/* Thẻ audio ẩn để phát nhạc */}
        <audio ref={audioRef} onEnded={handleSongEnd} loop={false} /> {/* loop={false} để tự chuyển bài, nếu muốn lặp lại cả playlist thì để true */}

        {/* Nút điều khiển nhạc nổi bật */}
        <MusicControl onClick={isPlaying ? pauseMusic : playMusic}>
          <button>
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <span>{currentSongName || 'Nhấn để nghe nhạc!'}</span>
        </MusicControl>
      </AppContainer>
    </Router>
  );
}

export default App;