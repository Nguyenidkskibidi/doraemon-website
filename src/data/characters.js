import doraemonImg from '../assets/images/doraemon.png';
import nobitaImg from '../assets/images/nobita.png';
import shizukaImg from '../assets/images/shizuka.png';
import suneoImg from '../assets/images/suneo.png';
import jaianImg from '../assets/images/jaian.png';

const characters = [
  {
    id: 1,
    name: 'Doraemon',
    description: 'Chú mèo máy đến từ tương lai, luôn giúp đỡ Nobita bằng những bảo bối thần kỳ.',
    fullDescription: 'Doraemon là chú mèo máy được Sewashi (cháu bốn đời của <span class="highlight-troll" data-troll-target="nobita">Nobita</span>) gửi về từ thế kỷ 22 để giúp đỡ Nobita Nobi. Chú sở hữu chiếc túi thần kỳ chứa vô vàn bảo bối thú vị, từ chong chóng tre đến cánh cửa thần kỳ, giúp Nobita vượt qua mọi rắc rối và khám phá thế giới.',
    story: 'Doraemon ban đầu có màu vàng và đôi tai nhọn hoắt. Sau một tai nạn với chuột làm mất một bên tai, chú bị bạn gái chê cười và buồn bã đến mức khóc cạn cả màu sơn, biến thành chú mèo máy màu xanh như chúng ta biết ngày nay. Điều này cũng giải thích vì sao Doraemon lại sợ chuột đến thế!',
    image: doraemonImg,
    color: '#007bff',
    background: 'linear-gradient(135deg, #a8dadc, #457b9d)'
  },
  {
    id: 2,
    name: 'Nobita Nobi',
    description: 'Cậu bé hậu đậu, nhưng có trái tim nhân hậu và luôn được Doraemon giúp đỡ.',
    fullDescription: 'Nobita là một cậu bé yếu đuối, hậu đậu, thường xuyên bị bạn bè bắt nạt và có thành tích học tập kém cỏi. Tuy nhiên, cậu lại có một trái tim nhân hậu, luôn quan tâm đến bạn bè và động vật. Ước mơ lớn nhất của Nobita là được cưới Shizuka và có một cuộc sống bình yên.',
    story: 'Cuộc đời Nobita thay đổi hoàn toàn từ khi Doraemon xuất hiện. Từ một cậu bé nhút nhát và kém cỏi, Nobita dần trưởng thành hơn qua mỗi cuộc phiêu lưu, học được cách đối mặt với khó khăn và trân trọng tình bạn, dù đôi khi vẫn dựa dẫm vào các bảo bối của Doraemon.',
    image: nobitaImg,
    color: '#feca57',
    background: 'linear-gradient(135deg, #feca57, #ff9f43)'
  },
  {
    id: 3,
    name: 'Shizuka Minamoto',
    description: 'Cô bạn thân xinh đẹp, tốt bụng và là người Nobita thầm yêu.',
    fullDescription: 'Shizuka là cô gái duy nhất trong nhóm bạn của Nobita, với tính cách dịu dàng, thông minh và yêu thích việc tắm bồn. Cô bé là hình mẫu lý tưởng của Nobita và cũng rất thân thiết với Doraemon.',
    story: 'Shizuka luôn là người động viên và giúp đỡ Nobita, dù cậu có hậu đậu đến đâu. Cô bé còn là một người bạn tuyệt vời của Jaian và Suneo, luôn cố gắng dung hòa mọi cuộc cãi vã trong nhóm.',
    image: shizukaImg,
    color: '#ff6b6b',
    background: 'linear-gradient(135deg, #ff6b6b, #ee5253)'
  },
  {
    id: 4,
    name: 'Suneo Honekawa',
    description: 'Cậu bạn nhà giàu, điệu đà và thích khoe khoang.',
    fullDescription: 'Suneo là con nhà giàu, tính cách khá ích kỷ và thích khoe khoang những món đồ chơi mới hay chuyến đi du lịch sang chảnh. Cậu ta thường xuyên bắt nạt Nobita cùng với Jaian, nhưng đôi khi cũng có những khoảnh khắc tốt bụng hiếm hoi.',
    story: 'Suneo rất sợ Jaian nhưng lại không ngừng nịnh bợ Jaian để được bảo vệ khỏi Nobita và để Jaian tham gia cùng trong các trò chơi của mình. Mặc dù hay khoe khoang, Suneo cũng là một người bạn quan trọng trong nhóm.',
    image: suneoImg,
    color: '#0abde3',
    background: 'linear-gradient(135deg, #0abde3, #1dd1a1)'
  },
  {
    id: 5,
    name: 'Takeshi "Jaian" Gouda',
    description: 'Cậu bé to con, hay bắt nạt Nobita nhưng đôi khi cũng rất tốt bụng.',
    fullDescription: 'Jaian (hay Chaien) là một cậu bé to con, hung dữ và thích bắt nạt bạn bè, đặc biệt là Nobita. Cậu ta tự nhận mình là "ca sĩ" nhưng lại hát rất dở. Dù vậy, Jaian cũng có những lúc thể hiện sự dũng cảm và quan tâm đến bạn bè.',
    story: 'Jaian có một cô em gái tên là Jaiko, người mà Jaian rất yêu thương và bảo vệ. Mặc dù thường xuyên bắt nạt Nobita, Jaian cũng có những lúc đứng ra bảo vệ bạn bè khỏi những kẻ xấu hơn, chứng tỏ bản chất tốt bụng của mình.',
    image: jaianImg,
    color: '#a55eea',
    background: 'linear-gradient(135deg, #a55eea, #5f27cd)'
  },
];

export default characters;